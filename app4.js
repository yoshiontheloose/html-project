

function addAnime() {

    n = prompt("How many anime chads to win against Yoshi and Kirby?")
    url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4210f9d-34cf-434e-b76b-ed37ad7ed3f6/ddoksvu-fee9668d-0bc4-4641-bacc-d83dfc490c0f.png/v1/fill/w_1024,h_656,strp/super_smash_bros__ultimate___fire_emblem_cast__by_ivanricardov_ddoksvu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NTYiLCJwYXRoIjoiXC9mXC9iNDIxMGY5ZC0zNGNmLTQzNGUtYjc2Yi1lZDM3YWQ3ZWQzZjZcL2Rkb2tzdnUtZmVlOTY2OGQtMGJjNC00NjQxLWJhY2MtZDgzZGZjNDkwYzBmLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7-AtBsHTnuX9GD9_jUGJWCkRCuBwUZQTpKm-vu3ftf0"



    for (let i = 0; i <= n; i++) {
        document.write('<img src=" ' + url + '" >');
    }
}