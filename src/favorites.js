let _post = []

const favorite = ({
 
    getfavorites(){
        return _post
    },

    isfavoritepage(category, title){
        const filterTitle = _post.filter(function (item) {
            return item.title.toString().toLowerCase().search(
                title.toString().toLowerCase()) !== -1;
        });
        
        if(filterTitle.length > 0){
            const filterCategory = filterTitle.filter(function (item) {
                return item.category.toString().toLowerCase().search(
                    category.toString().toLowerCase()) !== -1;
            });

            if(filterCategory.length > 0){
                return true;
            }else{
                return false;
            }
            
        }else{
            return false;
        }
    },

    setfavorites(category, title, post){
        console.log(category);
        console.log(title);

        const filterTitle = _post.filter(function (item) {
            return item.title.toString().toLowerCase().search(
                title.toString().toLowerCase()) !== -1;
        });
        console.log("Filtro Titulo");
        console.log(filterTitle);

        if(filterTitle.length > 0){
            const filterCategory = filterTitle.filter(function (item) {
                return item.category.toString().toLowerCase().search(
                    category.toString().toLowerCase()) !== -1;
            });
            console.log("Filtro Categoria");
            console.log(filterCategory);

            if(filterCategory.length > 0){
                console.log("Post já adicionado!");
            }else{
                _post.push({category: category, title: post.title, galery: post.galery, description: post.description});
                return console.log(_post);
            }

        }else{
            _post.push({category: category, title: post.title, galery: post.galery, description: post.description});
            return console.log(_post);
        }

    },

    removefavorite(category, title){

        const filterTitle = _post.filter(function (item) {
            return item.title.toString().toLowerCase().search(
                title.toString().toLowerCase()) !== -1;
        });
        
        if(filterTitle.length > 0){
            const filterCategory = filterTitle.filter(function (item) {
                return item.category.toString().toLowerCase().search(
                    category.toString().toLowerCase()) !== -1;
            });

            if(filterCategory.length > 0){

                const filter = _post.filter(function (item) {
                    return item.title != filterCategory[0].title;
                });

                _post = filter;
                return true;
                
            }else{
                return false;
            }
            
        }else{
            return false;
        }

    }

});
  
export default favorite;