﻿#pragma strict

private var objSelecionado: Transform;
private var piece: Transform;
private var local: int;
private var switcher: boolean;
function Start () {
	switcher = false;

}

function FixedUpdate () {
	if (Input.GetButtonDown("Fire1")) {
            var hit: RaycastHit;
            var ray: Ray;
			ray = Camera.main.ScreenPointToRay (Input.mousePosition);
      		

            if (Physics.Raycast(ray, hit, 100)) {
     			objSelecionado = hit.transform;
     		
 				if(objSelecionado.CompareTag("Board")){
 					local = Mathf.RoundToInt(hit.point.x) + Mathf.RoundToInt(hit.point.z)*10;
 					Debug.Log ("Board: " + hit.point.ToString () + 
					 	", Local = " + 	local );
					 if(switcher){
						switcher = false;
						//sendfrom(piece.position.x+piece.position.z*10);
						//sendto(local);
						piece.position.x = local%10;
						piece.position.z = local/10;
					
					}
     			} else {
     				local = Mathf.RoundToInt(objSelecionado.position.x)+ Mathf.RoundToInt(objSelecionado.position.z)*10;
					Debug.Log ("Piece: " + objSelecionado.name.ToString () + 
						 	", Local = " + 	local );
					 piece = objSelecionado;
					 switcher = true;
 				}
            }   
        }
}
