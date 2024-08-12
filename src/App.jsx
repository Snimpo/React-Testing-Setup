import "./App.css";


const name = "Silvio";


function Welcome() {

  const date = new Date(); 
  const year = date.getFullYear();




  return (
    <div  className="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus
        mollis nunc, ac maximus odio pulvinar sit amet. Donec justo lorem,
        feugiat et dui ac, pellentesque facilisis quam. Aenean aliquam, purus
        nec ornare luctus, arcu tellus aliquam purus, id mattis mauris ex sed
        urna. Ut non lacus sit amet eros pharetra luctus eu congue urna. Duis in
        nisi a orci congue ullamcorper. Etiam molestie turpis id nisl pulvinar,
        id lobortis est suscipit. Maecenas at commodo metus, a laoreet justo.
        Donec ultricies malesuada odio, at pellentesque dolor luctus vitae.
        Nulla nulla eros, volutpat nec eros at, efficitur accumsan tortor.
        Vivamus pharetra nulla ac nibh venenatis molestie. Donec non diam ut
        mauris dignissim pulvinar sit amet vel tortor. Sed vitae tellus a elit
        ultrices pretium nec vel elit. Vivamus ut finibus ex. Phasellus pharetra
        condimentum eros, a euismod elit.
      </p>
      
      <p>
        Aenean vitae urna et enim tincidunt congue sit amet et massa. Ut id orci
        velit. Phasellus vehicula sagittis sollicitudin. Nulla vestibulum,
        ligula id commodo rhoncus, diam ipsum vulputate nunc, eu imperdiet
        lectus tellus sit amet eros. In bibendum felis et purus varius interdum.
        Praesent faucibus placerat eros et placerat. Duis non nisi venenatis,
        tristique nibh quis, aliquet neque.
      </p>

      <footer className="footer" contentEditable= "true">Created by {name} &copy; {year}</footer>
      
    </div>
  );
}

export default Welcome;
