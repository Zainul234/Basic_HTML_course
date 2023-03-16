(
    function generateTable()
    {
        var data=new Array();
        data.push(new Array("Name","Age","DOB","Email","Company"));
        data.push(new Array("Zainul",22,"02-08-2000","zainul@gmail.com","Gemini"));
        data.push(new Array("Mridul",22,"05-09-2000","mridul@gmail.com","Yellow AI"));
        data.push(new Array("Suyash",23,"06-12-1999","suyash@gmail.com","Moody"));
        data.push(new Array("Arushi",20,"09-03-2001","arushi@gmail.com","TCS"));
        data.push(new Array("Manisha",21,"08-12-2000","manisha@gmail.com","Healthkart"));

        
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
    
        
        for (let i = 0; i < 6; i++)
        {
            const row = document.createElement("tr");
        
            for (let j = 0; j < 5; j++) {
                if(i==0)
                {
                    const col = document.createElement("th");
                    const colText = document.createTextNode(data[i][j]);
                    col.appendChild(colText);
                    row.appendChild(col);
                }
                else
                {
                    const col = document.createElement("td");
                    const colText = document.createTextNode(data[i][j]);
                    col.appendChild(colText);
                    row.appendChild(col);
                }
            }
        
            tblBody.appendChild(row);
        }
    
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);

        tbl.setAttribute("border", "2");
        
        tbl.style.margin='auto';
        tbl.style.textAlign='center';
        tbl.style.borderCollapse='collapse';;
        document.body.style.padding='10%';
    }
)();
  