$(function() {
    console.log('Here');
    $.getJSON('data/projects.json', function(data) {
        for(i=0; i < data.length; i++) {
            var col = document.createElement('div');
            col.className = "col-md-4";
            col.style.height = "400px";
            
            var project_box = document.createElement('div');
            project_box.className = "fh5co-blog";
            //project_box.style.height = "400px";
            col.appendChild(project_box);

            var blog_body = document.createElement('div');
            blog_body.className = "blog-text";
            project_box.appendChild(blog_body);

            var blog_title = document.createElement('h3');
            blog_title.innerText = data[i].name;
            blog_body.appendChild(blog_title);

            var blog_desc = document.createElement('p');
            blog_desc.innerText = data[i].short_desc;
            blog_body.appendChild(blog_desc);

            var footer = document.createElement('ul');
            footer.className = "stuff";
            blog_body.appendChild(footer);

            var org = document.createElement('li');
            org.innerText = data[i].organisation;
            footer.appendChild(org);
            var space = document.createElement('li');
            footer.appendChild(space);
            
            var link_container = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', data[i].link);
            link.setAttribute('target', '_blank');
            link.innerHTML = 'Read More<i class="icon-arrow-right22"></i>';
            link_container.appendChild(link);
            footer.appendChild(link_container);

            $('#project-list').append(col);

            console.log(data[i]);
        }
    });
});