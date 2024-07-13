src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
 src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
$(document).ready(function(){
    const elephants = [
      "https://www.bing.com/images/search?view=detailV2&ccid=fJq7cwi8&id=0C27ADF9488A61DA62576DC4A7ACC47BF24BA72B&thid=OIP.fJq7cwi8XXKz1ANnoOw42wHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7c9abb7308bc5d72b3d40367a0ec38db%3frik%3dK6dL8nvErKfEbQ%26riu%3dhttp%253a%252f%252fanimalsadda.com%252fwp-content%252fuploads%252f2013%252f04%252fAfrican-Forest-Elephant-4.jpg%26ehk%3dLmqVOs8wp0Rf9l982knQ48Zea7qLwHOFwE2eHQGilzI%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2048&expw=3072&q=elep%3bahnts&simid=608023024627644083&FORM=IRPRST&ck=801BA64FA2349BC547F0B624648F64F5&selectedIndex=4&itb=0XMgKkc+349M3TzI8eoWd1aRYWik3skfeTtNaMqnk1f6z/t084rEdOvl7HJMjkbSxI688n6Wecq4llNpYH6id5JC7Xv3fNZ+UDaAb9M0wamWAVC6kKQ/j4KHgkjbx1zmWcaJWVXCkrvUIxB5I8x9D55bBVSaOlNqUB2rK5EcplhEhO/cHQAORYFBfX/APbTaslAwcousSIalWSlIFgMjAXXHPr08s5G8+LkncKNk8gdLw3HaF8gbGRtJ3HqdH220k3YiSLGR2aSyya3/KBiVyiShOSrAKCCRzXNLRvo+2Xb/DJphqDNp3n1REEnPdQpLLe1UKje7Ozblb5Rx+95Pe/ipiN3zVxfFc4CSRQwVmAbhqJFj0NZR1It5WfQz+kTyDR9oymd9VFLFp9IRpxHBp41kWaVo3FqJAShk55FqQAwy+o7feM64jUxpL2YVEaIscgnnBkVdZDuCi38A4ugTXEhGfPRqJgrKzFlfdw5LUWIJYWepoX9MZ8bqBFLDutJTD3thSW7gnuypIsEWRwfPFfTot5mesg/SD4abYsq/Ctpe7UOw2KApAMzRCzQbcoC/MPQcdI9vbdBodJLNAs+oi7QTUMxaNYEkfv0ZgKAKMzqOONp9i3zySeSV2diTZurNA0FsDJOolO62YlxTljuLeLd1PPXCWmjLBMb5R6Pcy9s/wDCJo5UTTdps+ngDpFcr75CJJZhagEAkiyT4gOKs4tRqkid+zJ502RRmXTywA909RL8NKKN83Ug/hB520fJnUSkEF2NsGssxIIAF9fPj8ZRpGbkm2JJLeZFAVf9MFpkiz1Mj1s/bTzRTx6hkVpbj1CFR4mgaNDH4GA7tmLN0sEE3zyn40TajWafUyMfiY9QyF7YRzLGZI4T5kkiru/GL5vPLl2KqpPhUlh06mrw3Hz5+5y6oiuirvk+z1yazRyyKsLGGCVJ9TUoAj754e7VVj6AHxK1Dk0RQNYyfX9mdygO5tPD3ErwliVmdtMl7GYEeGmA9fPkAt47vGFUTwpTk3wb4F/XGNqGfu1ckRpQGwAGlFA10vr+cq6OeyVfx0e1jjiZ3eKSH9XDHJPHck3cwSyLZQlgWFMtrfRPIgDFNq6PY0kiozOmpVSDcGuhjkXTIsTOAd5IN37evHkY9XPH3tOQJRTihTUbAI6VfNew9OLS6ySRlcn5bVUqkVdoUFRfB6fjK+B/Jbzr4PTT6rs2fQw/O2o080p1Dyho1jZ9VUUUgA5CqpZq55HpWdDT6pv8Q7RgDn4UqdY0Eoj7xZ4T8RHExb9k14uhIA+h8L8RJseIse7eVZXHSyAV/wB8d8dJtc7m7xn3WfFQCbCTfUnj8YSoeMJgr/bPoY7b1Y1b6SFkmRR4XKCk0wUTb3aMhiTRpaBoglucbL2nENRptM+ojkd5dPrdPIrKY2i7p++SUoKDBT8vmG/PztO0jCsXcLRjnWdRJTkMgIUlqFjnkdCQD7YP2pLUSxb0VCJOvLSsmx2ocC7IoeXHliXpG+hv1Kxye0VxDoAqPt26BpFid6EDoLcLfiseKx/F6dMUU/ZhjjaZ071lDy3tWnbxMKPPXPLt2pqWlWQljSMlF2un/wAzkfvc39cztqpnZnZiWZizH1JNnLLTS9sq9QvSM+GGGbzCGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYZeVQkkqi6V3UX1oEjKYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgAYYYYAGGGGABhhhgB//9k=",
      "https://www.bing.com/images/search?view=detailV2&ccid=hE2R8dPq&id=7B858E9D783893F18D61225D416954A1C39B5E74&thid=OIP.hE2R8dPqnWcgIDWqBuNAXwHaFj&mediaurl=https%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa9%2fAfrican_Bush_Elephants.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.844d91f1d3ea9d67202035aa06e3405f%3frik%3ddF6bw6FUaUFdIg%26pid%3dImgRaw%26r%3d0&exph=2112&expw=2816&q=elep%3bahnts&simid=608027452779944838&FORM=IRPRST&ck=F95B26015F3FA44F447C6B36C1C117E0&selectedIndex=1&itb=0",
      "https://www.bing.com/images/search?view=detailV2&ccid=uGE0rRfq&id=DC88C6B8B17CA13DE39F739DDCC1074E6ACD22CB&thid=OIP.uGE0rRfqKsUiQeIUBRmgdAHaEm&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b86134ad17ea2ac52241e2140519a074%3frik%3dyyLNak4Hwdydcw%26riu%3dhttp%253a%252f%252fwallup.net%252fwp-content%252fuploads%252f2017%252f03%252f28%252f422699-animals-mammals-elephant.jpg%26ehk%3dbz9sDRInonTY1g8Ld7GsqcDrEl7rl2F%252bQDiF73eAegg%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2418&expw=3888&q=elep%3bahnts&simid=608035724883933262&FORM=IRPRST&ck=5FD4FA72C510216942F76ACAA2E4C40B&selectedIndex=22&itb=0",
      "https://www.bing.com/images/search?view=detailV2&ccid=S4roqLkO&id=8D6227E7D5776D8C5D74238080F68EF6E447103F&thid=OIP.S4roqLkO7soJ9PswKTr8lgHaE8&mediaurl=https%3a%2f%2fcdn1.byjus.com%2fwp-content%2fuploads%2fblog%2f2023%2f03%2f17131610%2fSTIM_Happy-Baby-Elephant-Running-scaled.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4b8ae8a8b90eeeca09f4fb30293afc96%3frik%3dPxBH5PaO9oCAIw%26pid%3dImgRaw%26r%3d0&exph=1707&expw=2560&q=elep%3bahnts&simid=608000703680623464&FORM=IRPRST&ck=B4D6C0D4F21CCB1BC8A8AAF305E00297&selectedIndex=34&itb=0"
    ];

    let currentIndex = 0;

    $('#btnElephants').on('click', function(){
      if (currentIndex >= elephants.length) {
        currentIndex = 0;
      }
      $('#elephantImage').attr('src', elephants[currentIndex++]).show(); 
    });


  $('#btnBerleezy').on('click', function(){
    console.log("clicked Berleezy");
  });
});