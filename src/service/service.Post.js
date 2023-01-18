
export async function getPostsService() {
    try {
        var data = await fetch(
            "https://my-json-server.typicode.com/savayer/demo/posts"
        );
        let result = await data.json();

        var newData = [];
        result.map((item, index) => {
            newData[index] = [];
            newData[index].id = item.id ?? "empty";
            newData[index].title = item.title.en ?? "empty";
            newData[index].link_title = item.link_title ?? "empty";
            newData[index].link = item.link ?? "empty";
            newData[index].text = item.body? item.body.en.substr(0, 50) + "..." : "not defined...";
            return null;
        });
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}
