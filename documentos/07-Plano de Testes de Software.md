# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
   <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-01:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-03:	O site deve permitir ao usuário vizualizar informações sobre universidades e cursos.</li>
   </ul>
  </td>
   <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
   <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
   <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
   <ul>
    <li>RF-003:	O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário universidades disponíveis.</li>
   </ul>
  </td>
  <td>Verificar se o filtro inserido está retornando os dados informados pelo usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página cursos</li>
    <li>Digitar na barra de pesquisa o nome de alguma universidade presente na página cursos e utilizar ou não os filtros de tipo de instituição e estado, verificar se o resultado é exibido na página</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar a universidade informada se ela existir no sistema.</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar os cursos da universidade</td>
  <td>
   <ul>
    <li>RF-006:	O site deve apresentar, para cada universidade, seus respectivos cursos.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos cursos da universidade estão presentes na página cursos</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Universidades</li>
    <li>Visualizar as informações referentes as universidades.</li>
    <li>Escolher uma universidade e clicar em ver cursos</li>
    <li>Vizualizar informações referentes aos cursos da universidade escolhida</li>
   </ol>
   </td>
  <td>Todas as informações, referentes aos cursos da universidade escolhida estão disponíveis na página Cursos</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-02: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Login", no menu.</li>
    <li>Preencher seus dados e clicar em “Login”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para página de universidades.</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-05: Verificar o cadastro de universidades</td>
  <td>
   <ul>
   <li>RF-04	O site deve permitir ao usuário fazer o cadastro de universidades</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de universidades está sendo feito corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Entrar como usuário administrador.</li>
    <li>Visualizar a página Administrador.</li>
    <li>Clicar no botão de cadastrar universidades.</li>
    <li>Preencher as informações da universidade</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Cadastrar", deve aparecer a mensagem "Cadastro realizado com sucesso".</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Verificar a edição de Universidades</td>
  <td>
   <ul>
   <li>RF-04	O site deve permitir ao usuário administrador editar universidades cadastradas</li>
   </ul>
  </td>
  <td>Verificar se a edição de universidades está sendo feito corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Entrar como usuário administrador.</li>
    <li>Clicar em "Administrador" no menu</li>
    <li>Clicar no botão de editar universidades.</li>
    <li>Selecionar o nome da universidade que deseja editar no campo "nome da universidade" e preencher todos os dados para editar a universidade</li>
    <li>Clicar em “Editar”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Editar", deve aparecer a mensagem "editado com sucesso".</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar a edição de Universidades</td>
  <td>
   <ul>
   <li>RF-01	O site deve permitir ao usuário administrador deletar universidades cadastradas</li>
   </ul>
  </td>
  <td>Verificar se a deleção de universidades está sendo feita corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Entrar como usuário administrador.</li>
    <li>Clicar em "Administrador" no menu</li>
    <li>Clicar no botão de deletar universidade.</li>
    <li>Selecionar o nome da universidade que deseja deletar no campo "nome da universidade"</li>
    <li>Clicar em “Deletar”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Deletar", deve aparecer a mensagem "Deletado com sucesso".</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar o cadastro de cursos</td>
  <td>
   <ul>
   <li>RF-01	O site deve permitir ao usuário administrador cadastrar cursos</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de cursos está sendo feita corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Entrar como usuário administrador.</li>
    <li>Clicar em "Administrador" no menu</li>
    <li>Clicar no botão de cadastrar curso.</li>
    <li>No campo "nome da universidade" selecionar a qual universidade esse curso pertence, preencher o restante do formulário com as informações do curso</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Cadastrar", deve aparecer a mensagem "Cadastro realizado com sucesso".</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-09: Verificar a edição de cursos</td>
  <td>
   <ul>
   <li>RF-01	O site deve permitir ao usuário administrador editar cursos</li>
   </ul>
  </td>
  <td>Verificar se a edição de cursos está sendo feita corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Entrar como usuário administrador.</li>
    <li>Clicar em "Administrador" no menu</li>
    <li>Clicar no botão de editar curso.</li>
    <li>No campo "nome da universidade" selecionar a qual universidade esse curso pertence, preencher o restante do formulário com as informações do curso</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Editar", deve aparecer a mensagem "Editado com sucesso".</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-10: Verificar a deleção de cursos</td>
  <td>
   <ul>
   <li>RF-01	O site deve permitir ao usuário administrador deletar cursos</li>
   </ul>
  </td>
  <td>Verificar se a deleção de cursos está sendo feita corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Entrar como usuário administrador.</li>
    <li>Clicar em "Administrador" no menu</li>
    <li>Clicar no botão de deletar curso.</li>
    <li>No campo "nome da universidade" selecionar a qual universidade esse curso pertence, no campo "cursos" selecionar o curso que deseja deletar</li>
    <li>Clicar em “Deletar”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Deletar", deve aparecer a mensagem "Deletado com sucesso".</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-11: Verificar o cadastro de usuário administrador</td>
  <td>
   <ul>
   <li>RF-01	O site deve permitir o cadastro de usuário administrador</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de usuário administrador está sendo feito corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Cadastra-se”, no menu.</li>
    <li>Preencher as informações do formulário</li>
    <li>No campo "código administrador" preencher o código correto de administrador</li>
    <li>Clicar em “Criar conta”.</li>
   </ol>
   </td>
  <td>Ao clicar em "Criar conta", o usuário será redirecionado para página universidades, caso ele tenha inserido o código correto de administrador, deve aparecer o campo "Administrador" no menu .</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-12: Verificar se as páginas funcionam corretamente em dispositios mobile</td>
  <td>
   <ul>
   <li>RF-01 O site deve funcionar corretamente em dispostivos mobile</li>
   </ul>
  </td>
  <td>Verificar se todas as páginas funcionam em dispositivos mobile</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar com o botão direto na página e acessar a opção "Inspecionar elemento" no lado superior esquerdo ir até a opção alternar barra de ferramentas do dispositivo </li>
    <li>Selecionar os dispositivos mobile</li>
   </ol>
   </td>
  <td>Ao selecionar um dispositivo mobile, a página deve funcionar corretamente</td>
  <td>Gabriel</td>
 </tr>
</table>



 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
