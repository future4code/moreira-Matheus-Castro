import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fiza3-1.fna.fbcdn.net/v/t1.18169-9/15826109_1065413203568544_2348517358137668381_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHHQRPSpGm89UecpYIRRnonchHvIvUIbgpyEe8i9QhuCrhJdBOXHupBnpmUqiFYM9L79IrvnbrJMe2Tj79z42rA&_nc_ohc=qukT7L3GaZEAX9ZPEwp&_nc_ht=scontent.fiza3-1.fna&oh=00_AT-UP_aj1oKcVbsLweKAJ0tHsFzAY6ZsQSLQXsSYe2slUw&oe=6203657D"
          nome="Matheus Castro" 
          descricao="Oi, eu sou o Matheus tenho 24 anos e sou estudante do curso de Full Stack da Labenu. Sou uma pessoa que gosta muito de tecnologia, desde muito cedo eu amo tecnologia. Já me aventurei no ramo empresarial, mas decidi mesmo vim pro mundo da tecnologia que é onde mais me encaixo."
        />
        
        <imageButtonContainer 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          texto= "matheuscastro1997@hotmail.com"
          imagem="https://cdn.pixabay.com/photo/2014/04/03/09/58/email-309491_960_720.png"
        
        />
      </div>

      <div>
        <CardPequeno
          texto= "Praça Arthur Bernardes, 43 | Centro - Ervália - MG"
          imagem="https://i.pinimg.com/736x/96/5c/7e/965c7eedc399211edfd5d59d8ce179e5.jpg"
        
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="data:image/jpeg;base64,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" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
