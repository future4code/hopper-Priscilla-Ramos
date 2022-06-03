import React, {useState} from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  // state = {
    // curtido: false, // usado para a lógica de mudança de cor do coração e o aumento/diminuição do número de curtidas
    // numeroCurtidas: 0, // número de curtidas do post. Varia entre 0 e 1. 
    // comentando: false, // usado para a lógica de abrir ou fechar a caixa de comentário
    // numeroComentarios: 0, // número de comentários do post.
    // comentarios: [] // responsável por guardar a lista de comentários feitos no post
  

  //USESTATE//
  //curtidas cor coração//
  const[curtido, setCurtido] = useState(false);
  const[numeroCurtidas, setNumeroCurtidas] = useState(0);

  const OnClickCurtida = () => {
    if (curtido === false) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    };

    //comentário//
    const [comentando, setComentando] = useState(false);
    const [numeroComentarios, setNumeroComentarios] = useState(0);

    const OnClickComentario = () => {
      setComentando(!comentando)
    };

    //envia o comenário//
    const [comentarios, setComentarios] = useState([])

    const EnviarComentario = (comentario) => {
      const listaDeComentarios = [...comentarios, comentario]

      setComentarios(listaDeComentarios)
        setComentando(false);
       setNumeroComentarios(numeroComentarios + 1)
      };

      const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

      const caixaDeComentario = comentando ? (
        <SecaoComentario enviarComentario={EnviarComentario} />
      ) : (return ( <CommentContainer>
              <p>{comentarios}</p>
            </CommentContainer>
          ))
      


    //State antigo//
    // onClickCurtida = () => {

    // verifica se, no estado, cutido é true ou false
    // if (this.state.curtido) {

    // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
    //   this.setState({
    //     curtido: !this.state.curtido,
    //     numeroCurtidas: this.state.numeroCurtidas - 1
    //   })
    // } else {

    // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
    //     this.setState({
    //       curtido: !this.state.curtido,
    //       numeroCurtidas: this.state.numeroCurtidas + 1
    //     })
    //   }
    // }

    // método chamado quando o ícone de comentário é clicado. O método apenas muda o valor de 
    // comentando no estado, de true para false ou de false para true.
    // onClickComentario = () => {
    //   this.setState({
    //     comentando: !this.state.comentando
    //   })
    // }

    // recebe como parâmetro um comentário, que vem do componente SecaoComentario. Com esse parâmetro, o método
    // o inclui na lista de comentários do estado, com a desestruturacao e o this.setState. 
    // enviarComentario = (comentario) => {
    //   const listaDeComentarios = [...this.state.comentarios, comentario]

    //   this.setState({
    //     comentarios: listaDeComentarios,
    //     comentando: false,
    //     numeroComentarios: this.state.numeroComentarios + 1
    //   })
    // }

    // render() {
      // De acordo com a propriedade curtido do estado, o valor muda entre  iconeCoracaoPreto e o iconeCoracaoBranco, 
      // que estão sendo importados nas linhas 7 e 8, respectivamente. 
      // const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

      // expressão condicional que, de acordo com o valor de comentando no estado, renderiza o componente
      // SecaoComentario ou o CommentContainer. Esta expressão está sendo chamada no JSX na linha 104
      // const caixaDeComentario = comentando ? (
        // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
        // <SecaoComentario enviarComentario={EnviarComentario} />
      // ) : (
        // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
        // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
      //   comentarios.map(comentario => {
      //     return (
      //       <CommentContainer>
      //         <p>{comentario}</p>
      //       </CommentContainer>
      //     )
      //   })
      // )

      return 
      <PostContainer>
        <PostHeader>
          <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={OnClickCurtida}
            valorContador={numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={OnClickComentario}
            valorContador={numeroComentarios}
          />

        </PostFooter>
        {caixaDeComentario}
      </PostContainer>
    }
  }

export default Post;