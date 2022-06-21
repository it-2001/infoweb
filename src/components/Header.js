/* Import základní knihovny Reactu */
import React from 'react';
import { gql, useQuery } from "@apollo/client";
import "./Header.css"
const ARTICLES = gql`
query Articles {
  articles {
    data {
      id
      attributes {
        title
        content
        likes
        dislikes
        releasedAt
        categories {
          data {
            id
            attributes {
              name
              shortname
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

/* Komponenta je vytvořena a exportována jako konstanta s využitím arrow function. (viz https://www.w3schools.com/js/js_es6.asp#mark_arrow) */
export const Header = (props) => {
    /* Komponentě mohou být při jejím volání předány atributy/props title a motto.
       Jejich hodnoty načteme do konstant title a motto. (viz https://www.w3schools.com/js/js_2018.asp#mark_obj_rest) */
    const { title, motto } = props;


    const { loading, error, data } = useQuery(ARTICLES);
    /* Situace, kdy jsou načítána data z backend serveru. */
    if (loading) return <p>Probíhá načítání stránky...</p>;
    /* Situace, kdy došlo k chybě během načítání dat. */
    if (error) return (
        <></>
    );
    /* Zajistí vyrenderování komponenty - kód v jazyce JSX je převeden do podoby HTML. */
    return (
        /* V jazyce JSX používáme k vkládání tříd atribut className. */
        <header className='bg-danger p-5'>
            {/* Do složených závorek můžeme vkládat proměnné/konstanty nebo výrazy v JS - v tomto případě konstantu title. */}
            <h1 className='display-2 text-white'><a href={"/"}>{title}</a></h1>
            {/* Provede podmíněné renderování bloku small - jen pokud existuje atribut/props motto. */}
            {motto &&
                <small style={{ fontSize: '30px', color: '#aaa', borderTop: '1px solid #aaa', textTransform: 'uppercase' }}>{motto}</small>
            }
            {/* V JSX lze použít i vložené styly, ale je třeba vložit je jako JS objekty, tedy i s použitím camel case syntaxe. (viz https://reactjs.org/docs/jsx-in-depth.html) */}

            <div className="w3-sidebar w3-bar-block" style={{ width: "10%" }}>
                {data.articles.data.map((article, i) => (
                    <a href={"/articles/"+ article.id} class="w3-bar-item w3-button">{(i + 1) + ". " + article.attributes.title}</a>
                ))}
            </div>
        </header>
    );
}