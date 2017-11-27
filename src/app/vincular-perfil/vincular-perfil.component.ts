import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-vincular-perfil',
  templateUrl: './vincular-perfil.component.html',
  styleUrls: ['./vincular-perfil.component.css']
})
export class VincularPerfilComponent implements OnInit {

    tab = 1;
	keepSorted = true;
	key:string;
	display:string;
	source:Array<any>;
	confirmed:Array<any>;
	userAdd = '';

	sourceLeft = true;
    format:any = { 
                add: 'Adicionar', 
                remove: 'Remover', 
                all: 'Selecionar todos', 
                none: 'Desmarcar todos',
                direction: 'left-to-right' }

	private sourceStations:Array<any>;
	private sourceChessmen:Array<any>;

	private confirmedStations:Array<any>;
	private confirmedChessmen:Array<any>;

	arrayType = [
		{ name: 'Underground', detail: '(string array)', value: 'tube' }
	];

	type = this.arrayType[0].value;

	private stations:Array<any> = [
		{ key: 1, station: 'WSSMAP_DAP'},
		{ key: 2, station: 'GSGestor' },
		{ key: 3, station: 'GSAdmin' },
        { key: 4, station: 'WSSMAP_AFI' },
        { key: 5, station: 'GS_CMDRS' },
		{ key: 6, station: 'GS_SecAgricultura' },
		{ key: 7, station: 'CadUsuário_Adm'},
		{ key: 8, station: 'CadUsuário_Add' },
		{ key: 9, station: 'CadUsuário_Atualizar' },
		{ key: 10, station: 'GarantiaSafraNovo' },
		{ key: 11, station: 'GarantiaSafraCPF_ADM' },
		{ key: 12, station: 'GS_CoordEstadual' },
		{ key: 13, station: 'GS_EmissorLaudo' },
		{ key: 14, station: 'GS_EquipeGarantiaSafra' },
		{ key: 15, station: 'GS_AdminDesenvolvimento' },
		{ key: 16, station: 'GS_Excepcioalidade' },
		{ key: 17, station: 'GS_GeraçãoFolha' },
		{ key: 18, station: 'GS_GeraçãoNIS' },
		{ key: 19, station: 'CancelamentoDAP' },
		{ key: 20, station: 'GS_ConfiguradorAnoSafra' },
		{ key: 21, station: 'GS_Detalhamento' },
		{ key: 22, station: 'WSSMAP_PGPAF' },
		{ key: 23, station: 'WSMDS' },
		{ key: 24, station: 'WCF_InfoDap_EntExternas' },
	];

	private chessmen:Array<any> = [
		{ _id: 1, name: 'Pawn' },
		{ _id: 2, name: 'Rook' },
		{ _id: 3, name: 'Knight' },
		{ _id: 4, name: 'Bishop' },
		{ _id: 5, name: 'Queen' },
		{ _id: 6, name: 'King' }
	];

	ngOnInit() {
		this.doReset();
	}

	private useStations() {
		this.key = 'key';
		this.display = 'station'; //[ 'station', 'state' ];
		this.keepSorted = true;
		this.source = this.sourceStations;
		this.confirmed = this.confirmedStations;
	}

	private useChessmen() {
		this.key = '_id';
		this.display = 'name';
		this.keepSorted = false;
		this.source = this.sourceChessmen;
		this.confirmed = this.confirmedChessmen;
	}

	swapSource() {
		switch (this.type) {
		case this.arrayType[0].value:
			this.useStations();
			break;
		case this.arrayType[1].value:
			this.useChessmen();
			break;
		}
	}

	doReset() {
		this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
		this.sourceStations = JSON.parse(JSON.stringify(this.stations));
		this.confirmedChessmen = new Array<any>();
		this.confirmedStations = new Array<any>();

		// Preconfirm some items.
		this.confirmedStations.push( this.stations[31] );

		switch (this.type) {
		case this.arrayType[0].value:
			this.useStations();
			break;
		case this.arrayType[1].value:
			this.useChessmen();
			break;
		}
	}

	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
		if (typeof this.source[0] === 'object') {
			let o:any = {};
			o[this.key] = this.source.length + 1;
			o[this.display] = this.userAdd;
			this.source.push( o );
		} else {
			this.source.push(this.userAdd);
		}
		this.userAdd = '';
	}

	doAdd() {
		for (let i = 0, len = this.source.length; i < len; i += 1) {
			let o = this.source[i];
			let found = this.confirmed.find( (e:any) => e === o );
			if (!found) {
				this.confirmed.push(o);
				break;
			}
		}
	}

	doRemove() {
		if (this.confirmed.length > 0) {
			this.confirmed.splice(0, 1);
		}
	}


	swapDirection() {
		this.sourceLeft = !this.sourceLeft;
	}

 

}
