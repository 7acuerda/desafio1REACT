import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardRv from "./components/CardRv";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="header">
        <Header htitle="Modelos de guitarras eléctricas (desafio 1)" />
      </section>
      <section className="body my-5">
        <CardRv
          title="Stratocaster"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan consectetur pellentesque. Aliquam porttitor augue eu vulputate efficitur. Mauris justo dolor, convallis sed sapien in, aliquet fringilla tortor. Donec aliquet orci dolor, sed dictum velit feugiat pulvinar. Donec a lacus nisl. Morbi convallis lorem vitae risus commodo, quis gravida mauris consectetur. Aliquam id fermentum ante. Curabitur volutpat massa et ligula euismod iaculis. Ut scelerisque tellus a fermentum elementum. Integer non massa eget metus tincidunt tristique. Praesent quis lectus odio."
          img="https://audiomusicacl.vtexassets.com/arquivos/ids/179054-1200-auto?v=637928033201330000&width=1200&height=auto&aspect=true"
        />
        <CardRv
          title="Telecaster"
          description="Maecenas viverra neque ac arcu dapibus feugiat. Aenean ac nulla nisi. Mauris ornare a leo sit amet efficitur. Morbi condimentum et erat eu molestie. Nullam sagittis imperdiet libero, et dignissim sapien tempor et. Etiam dapibus dui eu tincidunt ultrices. Sed dignissim metus ac ipsum aliquam finibus. Donec dignissim nisi sodales leo consequat porta. Mauris eu odio sapien."
          img="https://audiomusicacl.vtexassets.com/arquivos/ids/176192-1200-auto?v=637844488591400000&width=1200&height=auto&aspect=true"
        />
        <CardRv
          title="SG"
          description="Ut ornare vel purus id convallis. In tempor tellus tellus, nec ultricies dui consectetur in. Quisque quis egestas quam. Mauris eu semper sapien, at aliquet mauris. Nulla sem quam, consectetur sit amet porttitor vel, consequat non turpis. Donec gravida erat egestas lorem convallis, eu pharetra massa cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper arcu elit, quis eleifend tellus vehicula sit amet. Nam id semper ante. Curabitur sodales magna ut justo efficitur, nec fermentum eros tincidunt. Maecenas dictum turpis vel lectus finibus porta. Aliquam a blandit mi, in facilisis ligula. Mauris aliquet accumsan metus vitae porttitor. Morbi fermentum ultrices fermentum."
          img="https://audiomusicacl.vtexassets.com/arquivos/ids/180076-1200-auto?v=638003123293470000&width=1200&height=auto&aspect=true"
        />
        <CardRv
          title="Les Paul"
          description="Duis pellentesque malesuada malesuada. Curabitur venenatis quis elit ac accumsan. Curabitur id viverra lectus. Suspendisse at elit ullamcorper, semper est et, tristique leo. Etiam nulla nisl, aliquam vel lectus sit amet, egestas semper ante. Aenean ut diam augue. Aliquam interdum eu mauris eget sodales. Fusce vitae nisi eget ante rutrum volutpat eget a lorem. Donec ac arcu in ante venenatis suscipit et eget ex. Nullam aliquet sapien odio, egestas ultricies quam iaculis eget. Curabitur nunc eros, tristique at massa at, dignissim efficitur eros. Nulla ut venenatis diam."
          img="https://audiomusicacl.vtexassets.com/arquivos/ids/176171-1200-auto?v=637844488516470000&width=1200&height=auto&aspect=true"
        />
        <CardRv
          title="PRS SE Custom 24"
          description="Fusce condimentum feugiat porttitor. Pellentesque blandit at massa eu aliquam. Fusce dapibus est quis neque gravida ultrices. Curabitur efficitur vel ligula vel scelerisque. Vestibulum ante augue, efficitur nec metus a, consequat venenatis sem. Pellentesque at tellus iaculis, vestibulum justo condimentum, mattis ante. Duis a velit eu leo pretium porta vitae vehicula mauris. Cras sapien velit, rhoncus vel tristique a, egestas vitae eros. Aenean vestibulum ligula suscipit lorem imperdiet porta."
          img="https://audiomusicacl.vtexassets.com/arquivos/ids/168094-1200-auto?v=637801430329000000&width=1200&height=auto&aspect=true"
        />
        <CardRv
          title="Vintage"
          description="Nullam rhoncus purus at vehicula suscipit. Proin risus lorem, sodales ut ullamcorper sit amet, tincidunt molestie erat. Ut hendrerit auctor felis, vel tincidunt mi eleifend in. Vestibulum in ante arcu. Proin justo nunc, venenatis eget mollis vel, blandit ut massa. Quisque ante lectus, maximus ac malesuada vitae, pulvinar id quam. Etiam non blandit mauris. Vivamus odio urna, lacinia ac egestas id, molestie non eros."
          img="https://audiomusicacl.vtexassets.com/arquivos/ids/175617-1200-auto?v=637835678117600000&width=1200&height=auto&aspect=true"
        />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
