# Formik vs React Hook Form

Um comparativo das duas libs de formulários React mais utilizadas até o momento.

## Introdução

Aqueles que já desenvolveram formulários no React através de [Controlled Components](https://reactjs.org/docs/forms.html#controlled-components) sabem o quanto pode ser trabalhoso armazenar os valores dos campos em estados. A adição de máscaras e validações então só aumentam as linhas de código e quantidade de renderizações do formulário.

Para resolver problemas como esse foram surgindo diversas libs de formulários React ao longo dos anos. Nesse artigo serão comparadas [as duas mais utilizadas até o momento](https://www.npmtrends.com/redux-form-vs-formik-vs-react-hook-form-vs-react-final-form),  [Formik](https://formik.org/) e [React Hook Form](https://react-hook-form.com/). Como critérios de comparação considerou-se o tamanho de cada uma, a quantidade de downloads, o número de dependências, performance, dentre outros. Ao final será apresentado um exemplo prático com a criação de um formulário contendo nome, idade, email e telefone, aplicando máscaras e validações.

## Comparativo Técnico

O comparativo técnico foi desenvolvido com base na análise de dados do [npm trends](https://www.npmtrends.com/formik-vs-react-hook-form), [bundlephobia](https://bundlephobia.com/), e dos próprios repositórios das libs.

### Quantidade de downloads

Abaixo é apresentado um gráfico com a quantidade de downloads das libs por semana no período de um ano.

![Quantidade de downloads nos últimos 3 meses](/home/thiagosalome/Projects/formik-vs-react-hook-form/github/quantidade-de-downloads.png)

Como se pode notar, com pouco mais de 1.400.000 downloads semanais a Formik apresenta maior popularidade comparada aos quase 800.000 downloads da React Hook Form. Considerando esse período de um ano, pode-se concluir que ambas possuem um índice bem próximo de crescimento nas quantidades de downloads, sendo que um ano atrás a Formik apresentava aproximadamente 865.000 e a React Hook Form 220.000. Na tabela abaixo podemos comparar os dados mais precisamente.

|             |  Formik   | React Hook Form |
| ----------- | :-------: | :-------------: |
| Atualmente  | 1.414.310 |     797.395     |
| 1 ano atrás |  864.294  |     220.554     |
| Crescimento |  550.016  |     576.841     |

**Curiosidade:** Eu me perguntei o porquê dessa queda brusca na quantidade de downloads no gráfico no período entre Dezembro e Janeiro. Então aumentei o período para 5 anos, e reparei que o mesmo comportamento se repetia, mais precisamente nas semanas do dia 23 de Dezembro ao dia 1 de Janeiro. Não é coincidência que sejam períodoso em que se comemoram o Natal e Ano Novo. Abaixo apresento o gráfico.

![Quantidade de Downloads nos últimos 5 anos](/home/thiagosalome/Projects/formik-vs-react-hook-form/github/quantidade-downloads-5-anos.png)

### Informações do Github

Por algum motivo o npm trends não estava apresentando os dados referentes a stars, forks, issues e updated. Por isso optei por buscar os dados diretamente em cada repositório. 

|               | Formik | React Hook Form |
| ------------- | :----: | :-------------: |
| Watch         |  241   |       157       |
| Star          | 27.2k  |      20.7k      |
| Fork          |  2.2k  |       939       |
| Issues        |  505   |        1        |
| Pull requests |  100   |        9        |

Novamente aqui a Formik demonstra uma maior popularidade considerando a quantidade de watches, stars e forks. Entretando a React Hook Form não fica para trás, com índices bem satisfatórios. O que chama a atenção são as 505 isues em aberto da primeira contra apenas 1 da segunda. Mesmo sabendo da popularidade da Formik perante a React Hook Form, os índices de Issues são bem discrepantes.

### Tamanho e composição de dependências

## Comparativo de desenvolvimento

## Comparativo de performance