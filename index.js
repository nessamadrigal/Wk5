class Player {
    constructor (name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `$(this.name) plays $(this.position).`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.player.push(player);
        } else {
            throw new Error (`you can only add an instance of Player. 
            Argument is not a player: $(player)`)
            }
        }
    }

    /*
class NotificationSender {
    constructor(status) {
        this.status = status;
    }
        }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }

    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender extends NotificationSender {
    constructor(status) {
      super(status);
    }

    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
        return 0;
    }
}
   
class CollectionSender {
    constructor(status) {
       super(status);
    }

calculateFee(Status) {
        if (Status === 'OVERDUE') {
            return 10;
        } else if (Status === 'DELIQUENT') {
            return 20;
        }
        return 5;
    }

let collectionSender = new CollectionSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification.');


    class Animal {
        constructor(name, type, weight, height, location) {
            this.name = name;
            this.type = type;
            this.weight = weight;
            this.height = height; 
            this.location = location;
        }
    
        describe() {
            console.log('Animal Description');
            console.log("------------------");
            console.log("\tName: " + this.name);
            console.log("\tType: " + this.type);
            console.log("\tWeight: " + this.weight);
            console.log("\tHeight: " + this.height);
            console.log("\tLocation: " + this.location);
        }
    }
    
    let elephant = new Animal("Dumbo", "elephant", "8000", "108", "Disneyland");
    elephant.describe();
    
    */

    class Player {
        constructor(name, position) {
            this.name = name;
            this.position = position;
        }
    
        describe() {
            return `${this.name} plays ${this.position}.`;
        }
    }
    
    class Team {
        constructor(name) {
            this.name = name;
            this.player = [];
        }
    
        addPlayer(player) {
            if (player instanceof Player) {
                this.player.push(player);
            } else {
                throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
            }
        }
    
        describe() {
            return `${this.name} has ${this.player.length} players.`;
        }
    }
    
    class Menu {
        constructor() {
            this.teams = [];
            this.selectedTeam = null;
        }
    
        start() {
    
           let selection = this.showMainMenuOptions();
           while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeam();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
           }
    
           alert('Goodbye!');
        }
    
        showMainMenuOptions() {
            return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
            `);
        }
    
        showTeamMenuOptions(teamInfo) {
            return prompt(`
            (0) back
            (1) create player
            (2) delete player
            -------------------------
            $(teamInfo)
            `);
        }
    
        displayTeams() {
            let teamString = '';
            for (let i = 0; i < this.teams.length; i++) {
                teamString += i + ')' + this.team[i].name + '\n';
            }
            alert(teamString);
        }
    
        createTeam() {
            let name = prompt('Enter name for new team:');
            this.teams.push(new Team(name));
        }
    
        viewTeam() {
            let index = prompt('Enter the index of the team you wish to view:');
            if (index > -1 && index < this.teams.length) {this.selected.Team. '=' this.team[index];
                let description = 'Team Name: ' + this.selectedTeam.name + '\n';
    
                for(let i = 0; i < this.selectedTeam.players.length; i++) {
                    description += i + ')' + this.selectedTeam.players[i].name 
                    + ' - ' + this.selectedTeam.players[i].position + '\n';
                }
                let selection = this.showTeamMenuOptions(description);
                switch(selection) {
                    case '1':
                        this.createPlayer();
                        break;
                    case '2':
                        this.deletePlayer();
                }
            }
        }
    }
    
    let menu = new Menu();
    menu.start();