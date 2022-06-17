//array de objetos que almacena las imagenes de posts posteados somos somos

const Posts = [
  {
    id: 1,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982356154636177468/Jesus.png?width=526&height=701",
    coments: 5
  },
  {
    id: 2,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982356154346795049/Axel.png?width=526&height=702",
    coments: 5
  },
  {
    id: 3,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982356154019631184/Alexis.png?width=526&height=702",
    coments: 5
  },
  {
    id: 4,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982356153738600529/Beto.png?width=526&height=702",
    coments: 5
  },
  {
    id: 5,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982375337822392350/IMG-20220516-WA0006.jpg?width=526&height=702",
    coments: 5
  },
  {
    id: 6,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982375334647320696/IMG-20220531-WA0001.jpg?width=720&height=405",
    coments: 5
  },
  {
    id: 7,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982375336014671923/IMG-20220525-WA0008.jpg?width=395&height=702",
    coments: 5
  },
  {
    id: 8,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982375336366968842/IMG-20220525-WA0006.jpg?width=395&height=702",
    coments: 5
  },
  {
    id: 9,
    image:
      "https://media.discordapp.net/attachments/709634925589954640/982375336614453409/IMG-20220525-WA0005.jpg?width=526&height=702",
    coments: 5
  },
  {
    id: 10,
    image:
      "https://media.discordapp.net/attachments/940647729695166476/982423444220166164/IMG_20210215_185248506.jpg?width=526&height=702",
    coments: 5
  },
  {
    id: 11,
    image:
      "https://media.discordapp.net/attachments/940647729695166476/982423389404794900/IMG-20210216-WA00012.jpg",
    coments: 5
  },
  {
    id: 12,
    image:
      "https://media.discordapp.net/attachments/940647729695166476/982423244680364092/IMG_20210215_185536217.jpg?width=526&height=702",
    coments: 5
  },
  {
    id: 13,
    image:
      "https://media.discordapp.net/attachments/737869974013476906/983379808551583794/1654526409851.jpg?width=355&height=473",
    coments: 5
  },
  {
    id: 14,
    image:
      "https://media.discordapp.net/attachments/737869974013476906/983379968010629180/1654526446634.jpg?width=355&height=473",
    coments: 5
  },
  {
    id: 15,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISERgSEhIYGRgYEhIYGBgcGRkZGBoYGBgZGhoYGBkcIS4lHCErHxoaJjgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs/MTY0NzQ0NDQ2NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgAFAwQGB//EAEEQAAEDAgQDBgMGBQIEBwAAAAEAAhEDIQQFEjEiQVEGE2FxgZEyQqEUI1JiscFyktHh8CQzB3OishU0Y4KEwtL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAgIBBAEDAwQDAAAAAAAAAAECEQMEEiExQSIyYTNxoQVRgZETI0L/2gAMAwEAAhEDEQA/APRCgUSlUEEQRKBQAQKJSlAKUCiUCgFKUpikcUAClK1MRmNNhDS7fnBgdJOwk7TuqPP+0jaIeGt1FrRaYmd+LZoAIv8AmtKFkmXmIzKhTJD6zGkbguE+yy0MSyoAWmQdjyK8ar52alR3eN4C7Vopw2TNpJAcRMmJHLorHI+0RwrqlMOBZOpmouIlw4hy5n9TdTtJ2nrKK4HK8/xNSuGB7arHd5B+B2pjWuOmBAHFAB367rsctx7atNtTaRcHcEWMqKDVG8iEAiEKjBEoBEIAooBFCAhEJUQgHUQCKAIUURQEUUUQGQpUxSoCFBFAoAFKUxSlAIUCiUpQAKos8zltGjIGp7xDGDck85Nrf0HMK3xLy1jnNEkNcQOpAsF5J21zDvKwZTqSyGlon4Tzg8hPL8vKFKVloooswzCpUqvNSod3E6SYJ6eMbSVpvxVR1i48ufTZR/EQ0kQCYPnuke7TYQb78vdXLAZIEkHzUZVJcJ67m6V5dseX+T9UcO0TxIDawmLqUn95TfpcDuPaPqrLC53iKdQVW1CYGktBMFp3JFwD4qi0b+ClJxF/FQLPcOzObDE0y4GdMA84cZkfofVXi4rscXU+Bzwdeh7S2YcIAIEjkAD6rtAVRkSXI4TBKEwQoEIoBFARFBFAOogEUAVFAogCooogMhQKJQKABQKJQKAVApkhQClKUxSOQHIdss5q0RpbTIbqAD76bjckRpNzF4kLyjFV9TtTtzxGbyTcmeS9Q/4iYgMpAOplwJdfkAW84ImCCY8QV5K4325z4+6ui66HL4g26hMyi57pgkcuXkkgTBn4SJ8Va/8AiDHYdtMth7HthwMSySSD0PJG2i0Un2DLcnqVmOqU4IDtESJ6x+kLWxeH7s7iesQfEEHmtmhjHYWq19E6gXA6CDcA/C4fofFdb257PN1MrUwAXcJYTuYkFp8OaycmpK+maKCceOzgajmu+ERESf8APRKwgAhy3vsppuDTJO7muBBHIgRvM2Pkhj8J3T3UybfKfCea0UkVcGuTo+xOErVngtxQDKel2k8RDgSWiD8pEg6SLGOZXqmGeXMBIgkXHjsY9V5n2IyqqMSx7maW928OvDtLgHMceXICbblensYAAALAQFDM5DtTBAIhQUGCIQCKAIUUCgQDBFAIoAqKKIAqKKIByoVCoUAECiggFSlOlKAQpSmKVyA4H/iOx7qYdHCyA4TvqcCHW/DEX/H4LzB1ThI08OqZ5+QPNe69ocCK2HfT0yHNIN9gLyvJcxyF9FrmOAMAPaeLVp3cNMxbnblIN7Wiy66KNjQQIn4iQOsxA+itRgm0303Ph2ztI3IbuD52sqwAs4SIIcQZ6greo95ra5j9ThcCCYAvMdPFRI1gkWOT0O9xTA9zWtD2GQOHS0yB6wLHYWXo+fZvgtbWOeHvjS1gMkT4fLy8bBcDgcpxBo1C1g0Fxltw5rjeB+UgjdbeR5NUpl7h3bXQ0sFTVDriRLdrTe9xssJOMu2bxi10B9JtTFOd3eljSG8jxc5iJHL0U7U5bIa8jfh99lZZZ2ZrOrmprF2gvLQ5rS4/EGgm4HVW/aDDM0MpuuO8pzO8SJ+iycqao122qfk2Ozb6hfJqamGnpA5amWkRYdIXSBauBwjKbGaGaRpsPAgf56rbC2xNtcnHqNu70hCYIBELU5wohBEIAhQKBRAMEUAiEAVEEUAVEFEBkKhUQQEKCJQKAVAooFAIUCiUCgFIWnicvpVGlj2AtIiJMewK3CgUJPL+0nZ1v2tzWFx1sY/iM7jSZPMywmfFXXZ/KGU2aaz3NMAMiwN7NJ6c4XRZxgmPaKjjpcwHj34TuI53Wk7KaeJohjqsiPiEW8Vz5ZSujvwuLjZcYXLRTpvb8Qfe3kB+gWPB4Om4lkbe8LnqOa1cs+6xNUPpgtDKhBuCY3EiWneeu5ut3N847sd5Re3vRDi19tTCY6g7g7TFlRQbfAcqTtnTOpMptgDkuPz6k9wFYgaC9rWAm5vvHSyv8Riu9oBwtray25GuBFukqn7XPIq0GzwB7RHiXNE+0qO5Fo2lZ0Mk7xtAA2ARCCIXWkkqR58m27YwRQRUlQohAIoCIoIoBgiEoTICIoIoCKKKIDIgooUBClRKCACBRSlAKUCiUCgAUqYpSgMdVgc0tcJDgQR4EQVxOByDE031BTdwglpaYIfza4XGnlzBuV3BXP1sS6lXe7DVO8c9zdTC5vdsIItIaTq3geN+SpJdM3xuk1+4+TYilWqFjqYgUmgtdTc1r3mQ5+l4jVEgwB8V91nxPZim90io7RJ4C1joncB5GoT5+RCtMBXPdtdVDWnZwDtQHWCQJ9k1Zp1Sx/CeXj1lc8pN8m6SXBWVyGPFNoMB1Nx8AHC8n+E+y1+2+G+4FUfJUpv9AY/dHNcU6m7VEiINwPEH9VU5tm5dhatMgxDA02+cifbdUhZq+TrgZRXJdms4qBop1QXgMBY60w2zmE84sRzj6dRSxDH2BvGxs72K7FJM4ZwkuzOEQlBTKxkFEIIhAFFAKIAp0iIQDKKKIAqIKIDIoooUAEFEEBClKJSFAQrXxOIFNpMSYs0RJ8BO3mVgx+N0uFNhGsiT+VsxPmbx5Fa32dxIANzOo8+X1usMmXa9q7OnFh3LdLoQ56ItTPqQP2Qp5w55jQ1viSXD9lW4h7A9zQ4EhxBAlxB6GLyjg8QxlRpIdE34XbEEdPFeUtXnWTa+ro9l6PTvE5Jc1Zv4im6o3jqFw6CzfYb+q5DOMU7DioaTASzuyXHZp1NsG7kkO38F3GJwLPiaS2RuD68rG36Llc+y+o2nUaYdrAH4SS0EiTz5HlYFejB+rk8+Xt9J0uS4sYnDtqDSQ9rXFszpcfib4wZW64tZTkCA1sAfhnYEBecdkM2+x1XUqshjyC08mu29iI9vFeiucHfeU4JIEttxjwPXdGqdFXaKjO6feUyDfgDuZBLJJbA8L+nPZcriNJoaB8Rqusdy1rBG/iSu3xeGNRg0giQXCQZEiRK5p2Tio1oebsqOhxE6pBaLHaxBG9h7IllKheyuH1hlZwhzmaXCCAYOkGJ6lo/YbrrqmW94TrJs8FkEtIaQAQY3uJ9VWYDBmm5rGNEiIk8zqcSR6R4bc4VtQ7ySKhk8g23opbvlGbVPsFcupiQ+QIBDrn3390G49nMH0BK2fsgA11CD57CVrYnByeEho6AX/p9FG+UfJGyEvBs06zXWBv02PsVlXP4tpbxPdtcASH6tgLb3PJJhs4q0yPtDYYTGo7ttzI3/AF/RaxyWuTKeGvazpAilBTLY5wqIIoBgUUoTICKKKIDIgilQEQKiCABSlEla+OfppPd0p1D7NJQlHHtrd9V7whx1VNbS0jUPjZTAnpE+QPKV1VAkzdriWjiA4T5c485335DlsFT0TUpBmttK7CDLm31aTNjA+qu8ixwq02BzYcGhrXkSC5syOosAfGT0XK1u5O728GliaOl7mi3GTeSYN4BJiPTmtapSJaWlxIIIiwm3gFa5q3jEiCWX9D5nqtCF4WolKOV0e5p6eJfYtMLjmva1kQdDSOdgP7H2KGOpa6RkTEctR4T4gyYHRZMvw7dDXAcTmgTH7lb32cBuncQQZ5zuvZT6aPGfDaPPc6yrVT1RO/Ij6HbyWt2Y7QvoVBh6slpMMJ3B6Fd5UwM04jYuaduW2wHJcHn+Slrw8AiHAyNxBmR4rTi2mWi90fk9PZWZUYHB27fIievTYqrq0RxDqCPLy6Jez92TMh4D/KwA/wCkD1lWFSndZTbapFYxSlyaWXPc6o4uFxp94i145TyN+dit9hGqYAsSTzPqtNj9FYN5PB/maJ/SfYKx7tSpNkSikytx1QF2oztwiTJEbkfK220XWTD4eoHw9ztpF5bytB29IWm2sTiXh5AaC2Ji54YAv5ddz1Vo/ED8QE/W8GBzurt2qKJbeTQzZ4pt1AA6S0uBvLfmEDax3tsqnMDTNN20Q4NYNYbFuTrb9NlaYupUcyoCG6dFRrTMkmDFgInnHJc9i3jS5tTUCynTc8W+Kwa2+/X197bUkQpOzpOz1YvwrCTcAs/kcWj6AKzCpuyzNOEZ+bW7+Z7iPoQrgLoXRyS9zGUURCkqREIKBAOolUQGVBFBABKUUpQAK0s4P+mq/wDKqf8AaVulaGdH/TVfGm8e4j91DJj2jjsoqFjmvDjE8QubRFuRP9ut+hw2IfU1hrQXivS02IBDW/H4NIafeFy+FDqcODo8wdJPgdhKtsLiS1+skF2qI1HSWn5SDyssqvk7GbuIxADGMfVD6gfUm/FGoiY5CwWBht6kLWq0Kj2sfww11QkDSCX6SS2BEfM0TMW6oUMcxzA/UAHBrr23HOdtl4+vwtZNy8nr6Cd49vlHWZO37pp5xHsSrEtVB2ezGm9gY10mXwdLtJudnxpPuuglehh5gr/Y83OqyNfLFhga4EgTFyYEjbc78lTZlhA5pEK4LouFVsqOL303ySJcDHymJBgQ25sJJhaS5RlBuLNLJxoZp/CYV09wLNQvA5Lnn4ru3vi8FuodBMHwmCDHiOoWXDZjTFOWVAACQ3bjEAkgTyv67hVjBtmk5eSqz3MXNfTqMdYEODOctMwB4wRPjC6bDY1tVutrpbpBbBF5AIP1XOYjCd4CWuNnAgkSQ4ODid4E2kcxK0MqxrqbX0DALXnQORDnRbrB38EkkuF4Jj6kXNNwfVOIdfS57KbdgTYPfPm2PTxWaHve4vuIaSNVpM2AsbR15rcwVCnTptpgEw0W/e9lr5g+oBAbql8aREhg3Pjy/mVo8Gc+WCu+mxhECAT8+n5uITynad4C5DMazu4eZkvqBjQLiGTABG9yrHH1u8aaboa8SGbgunYODvEn/Ctenh21H4Vrfh7wS07iDrcD/LBH9FdeCtUmdtgaHd02Ux8lNjf5WgLYCQJgVucg4RCUIhCAooKIAqKKIDKgigUACkKYpSgIVV9oHf6dwG7ixo9XD9grMqozt8ljOri72Ef/AGVJuotmmKO6aRWUcINOg8xtNiPD2RflzogcWkzvxD1H7j1VpTADRYm42EmwJ/t6q0w7NLQOgHuuaE2juyJHJmg+nJph0aWmHQRIcHfELHbwVFhMvp/ay7ENYW6GOa106QSXgwJ0uuBvO/gvQcUxm8e1vdee9oA6pUqhrNXBSa3wu4z9PqrSmn3x8k4YS/55+Dtcv7mpUll+7awNAJDGlwdYMFg6NzEw4K+aV592Xxb6bYqNA+GWNEQ3YE3ube0Dku4o1wQCNiBBWWPLGUnFPotnwzhTaqzM5VuZYFtUCTBbMGAd+rSIK3nPWu99iryZhFM5qjgGUHksALnyHGA3VEkAgDrPutGnU01XweBxsCIAO8evXxVpmFWBq6EH2MrTx+EcWaqTZ1PDi2w8wCbCUjLnnyayjcS7e8GkSABbwA6brznvKwxEMh72PsYsY3MCLEyfVd7lWGLWQ4HwBMx/U+Kqc1otp1tRZd7SNW8CfLcbrWLTbrky5VJnRZVixiqIdTcGuHC9hElr+YPOOhWhiXGm8tqONmzqYTA25HbfnZc2MRUwb3PpP4uEabO1NcCSXRYeHTfaytMvx3GXu+drmmbw4mYJ9APUFQlww1TMub6HU+OHCLPFnNnqP88uapuzLCcYyXTp7x3/AEETHjIV3jaLajC0fFptPuduXkqzslSLcY9p+Sm/6uYN1OJpkZVUTuAmCQJlucY4TBICi1CBkUEQgCogogMqBUSkoAEoFEpSgAVR5o//AFLR0pt+rnf0V2Vz2cWxTD1p/o4/1WOb2s6NN70WdDktwOgStOlBAWWo60LjTo7pKzUx+KgFchh6pfWqnkDTHqAT+/1VnnFYtm6o8kdqpuefmqOPsdI+jQsM7/1t/wAHoaPGty/ssqToeT1a36E/1VvlWYaDoceEmx6H+i5zEPe1wLQDZ0z6J6WLDiADc8ue31XHBTi1KJ6GbHCcXGR3peSiGGLqhyjOWM4KkwBaAXER8sAf5+m+e0DX8NCm57vMBo/icJA8t/BerjlujbVfc+dywcJtLn7FVnTCwG1rqZViQ+m0Hp9QrPE4J9Rv3rm35NEDyuSVzDXijWdTabAyJ8d0aNItNHVUXwseYUA9s8xcHn4wtbD1pErfYZSEnFlZxTOTbQY0vtqiLGTwgCT/AJa6qsFUJqaG8THgNdyl/J0xO5ifNdXmOWNc7XE+BJ078xK0XZdoY4tibkW5i4+q3eWPfkyjjk+H0aeBqPY9zS6CPiafmH4h+bkf7re7JAuxFZ55NaP5nH/8rRz5vw1wBOniHtCvOyeFNPD944Q6q7WfBp+Ee1//AHK2P1eozz+mO06AFEJAmBW5yDApgUgKIKEGREJAUyEDSogogMhSlQqFAApSiUpKAVxVB2hEVKT/AONv/aR+6vSVTdp2fctf+Cow+hlv6kKmRXFm+B1NGxRfZDFVHaTp3hauGq2C2Q8Lzj0ykGTOqEmpUcZ2FoHoN/dQZG6mNLSwNE/jAHWwcVfsqNCyd8FK+Q5yT4OUGUMfuHVPysYdPq9xMe4W3QyR08FFrbR+FsfmPxv8rBX/ANtaLEQldjgtVJJGUt7Zr0MmZH3rtf5Yhn8gsfWVul7aYhoAHhstSpjxFyqzE5m38Sq3fQjBvsun1mxcri+1PA9tRvWD5Jsbn+mzLnryC5fMcyr19pLescPoeavCLbsu/SdflGYa2weS6XDPkBeVZVjX0yA7y9F6BlGOBaJNjsVWcdrJtSVouK9SyrK9XrsrGvxCy5rN6jmiQqVbCodzBiqzKPyDif00t+X1MD1XWBVHZ7A91Slw43w53Ufhb6D6kq2BXdjjtjR52eW6XBkBTgrECmBWhiZAUZSApgUAwKYFYwU0oQPKiWVEBmKUlElKUIISsZKZxSEoSAlaeaUe8ovZzLDHmLj6gLcKxuKgsnTs5jK8S1zRPQLdrPDbrn8S84XEvpxw6tTZtLHXEeVx6LO7OaccRhcEoNM9eMlJJm7Uxq135hG7oVLi85p8jKqK+cMPQeqmONsl0jq6mbtHOVX4nPYHCVy78yadgT5SVmwza9Q/d0o8TYKzhGKuX5LRi5dK/sW78yqvF7DqbBav2p1R2lgL3dG/CPN3JbmGyEuOrEPLj+EWH91eUKDWDSxoaByAhcmXWQhxHl/g7cekfcuCtw+RtMOrHVcHQLMtyPN3+WXR4zLqTqYLGjSRa30WoStnCYjTwHY7eB/uufDqpuVSff4LanTLbuiuUcdj8u0uNlu5JWBpkTdjiI8OSy53iPvDTYwlxFzsAOs+q5k1iwO0OiCBI5ybny6L14xco8nkOajI7CpnTqbYBB9VnyfD1MQ8VqohjTLR+M8j5D6rnsloh9enr4pe2ZuLX2XobSrQxq7Ms2ZpUvJlBTgrECmBW5xGQFOCsYKYFBRkBTArGCiChBlBUlKCmlAFRBRCDMSlJUJSEoCEoFQlKSgA4pCUSUhKElbnGUU8SBrkOb8LhEx0M7hcT2rymnhKLSHve974EkABoEkho3+UXPNeiuK4ntizvq7KY+Rhn+J8GPYD3WeSUYLdI7dHCeaagnweftw73byt/DZKXcleUMsAN1ZAsY0EkAWEmwF+ZXnZdY+oH0OPQYoK5K/uYMDlNNgEtBMK1Y0AQBCerWpva3Q0NgBpIdq1Ebnwnok2Xm5pScvU7OqHMVxXwNKYPWOVjesUrL0bBKWVhL1idXI3upUSaK7NaTmB7xqc97g2QCSGRMW8jfyVHVwz209TmkfeAkGxA2C6jEBtRumXA8iCR6SFUvpH7KJk/flpkyfiNjK93S5nKKT7XZ87rdP/AI8ja6fRtZVwVKbv/UZ9Su8BXIOoQwEdAQupY+QD1APuurHK7PP1EapmwCmBWEFOCtTnMwKcFYA5OChBlBTArGCmBQMyApgVjBTAoQZFEkqIDMUpUUQgBSFRRAIUpUUQkxuXH47/AMw//mIqLi1/0z2P0b6rMb9yq/OP9lyii8jF70fR5Payi7M/7y7kbeiii1131Dl0f0kYht6pKiii412di7AFgqqKK67JMVPdDMP9j/5A/VRReho/ezyv1T2Is3/7Y8lc4f4G/wALf0UUXo4e2eFqOkZmpwootzlGanCiiAcJwoohAwRCiiEDKKKID//Z",
    coments: 5
  },
  {
    id: 16,
    image:
      "https://yt3.ggpht.com/ytc/AKedOLSdPrYy-1-pNgdnWuZSBFjOf1ikQBBsxPxwEi_yVA=s900-c-k-c0x00ffffff-no-rj",
    coments: 5
  },
  {
    id: 17,
    image:
      "https://i.pinimg.com/736x/55/15/29/551529e3c1d6e01dcdfc38ce0e17bc3b.jpg",
    coments: 5
  },
  {
    id: 18,
    image:
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TEXP3AW35VFBXDFVPN32K55TYU.jpg",
    coments: 5
  },
  {
    id: 19,
    image: "https://pbs.twimg.com/media/Dx3qNhjVsAAl-cb.jpg",
    coments: 5
  },
  {
    id: 20,
    image: "https://pbs.twimg.com/media/FE6zZM7WYAk8c_y.png",
    coments: 5
  },
  {
    id: 21,
    image:
      "https://eldiariodecoahuila.com.mx/wp-content/uploads/2020/10/Elded.jpg",
    coments: 5
  },
  {
    id: 22,
    image:
      "https://cinemadreamer.files.wordpress.com/2008/12/bichoswp8.jpg?w=584",
    coments: 5
  }
];

export default Posts;
