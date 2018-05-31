import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {

  //const val="1";
  // Converion en int : const val_int = parseInt(this.val);
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    let id=next.url[1].path; //Récupérer le second argument de l'URL et le convertir en entier
    //On a enlevé le + et on la mis ci-dessous pour pouvoir récupérer la valeur de id aprés dans ${id}
    if(isNaN(+id)||(+id<1)){
      alert(`Attention, Le Id ${id} non valide. Veuiller entrer une valeur exacte`);
      this.router.navigate['/posts'];
      return false
    }
    return true;
  }
}
