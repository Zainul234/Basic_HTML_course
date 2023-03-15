(
    function generateTable()
    {
        var data=new Array();
        data.push(new Array('S.No.',"Name","Contact","City"));
        data.push(new Array(1,"Zainul",7068926592,"Ghaziabad"));
        data.push(new Array(2,"Mridul",9616707112,"Dehradun"));
        data.push(new Array(3,"Suyash",8717286378,"Pune"));
        data.push(new Array(4,"Arushi",7621836666,"Bhopal"));
        data.push(new Array(5,"Manisha",8899932333,"Bengluru"));

        
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
    
        
        for (let i = 0; i < 6; i++)
        {
            const row = document.createElement("tr");
        
            for (let j = 0; j < 4; j++) {
                if(i==0)
                {
                    const cell = document.createElement("th");
                    const cellText = document.createTextNode(data[i][j]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else
                {
                    const cell = document.createElement("td");
                    const cellText = document.createTextNode(data[i][j]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
            }
        
            tblBody.appendChild(row);
        }
    
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);

        tbl.setAttribute("border", "2");
    }
)();
  