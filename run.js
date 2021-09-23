$(document).ready(render());

export function render() {
    let root = $('#root');
    root.append(`
    <form autocomplete="off">
    <div style="text-align:center;">
    <div class="field has-addons has-addons-centered" >
        <p class="control">
            <input id="top" class="input" type="text" placeholder="Your name">
        </p>
    </div>
    <div class="field has-addons has-addons-centered" >
            <p class="control">
                <input id="bottom" class="input" type="text" placeholder="Crush's Name">
            </p>
        </div>
        </div>
        <br> 
        </form> 
    `);
    root.append(`<button class="button getLove is-large">Calculate Compatibility</button>`);
    root.on('click','.getLove', getLove);
}

export async function getLove() {
    let root = $('#root');
    let top = document.getElementById('top').value; 
    let bottom = document.getElementById('bottom').value;


    const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: top , sname: bottom },
        headers: {
          'x-rapidapi-key': '8e326d18c8msh9ef838a34312c9cp163c90jsn2695e147a764',
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          root.empty(); 
          root.append(`<br> <br>
          <div style="text-align:center;">
          <p>
          ${top} and ${bottom}: 
          <br>
          ${response.data.percentage}%
          <br> 
          ${response.data.result}
          </p> 
          `);
      }).catch(function (error) {
          console.error(error);
      });
}