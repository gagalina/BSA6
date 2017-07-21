import _ from 'lodash';

function userList(users) {

    const container = document.querySelector('#userTable tbody');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const tr = document.createElement("tr");
            _.map(user, (el, key) => {
                const td = document.createElement("td");

                if (key === 'avatar'){
                    const img = document.createElement("img");
                    img.src = el;
                    td.append(img);
                }else{
                    td.append(el);
                }

                tr.appendChild(td);
                container.appendChild(tr);
            })

        });
    }
}

module.exports = userList;