import $ from 'cheerio';
import {useState, useEffect} from 'react';

export default function Definition(props) {
    const [definition, setDefinition] = useState([]);

    function getDefinition(word) {
        if (word !== "") {
            fetch('https://archives.nd.edu/cgi-bin/wordz.pl?keyword=' + word).then(function (response) {
                return response.text();
            }).then(function (html) {
                return $('pre', html).contents().text()
            }).then(function (def) {
                console.log(def)
                if (def.includes("UNKNOWN") !== true) {
                    setDefinition(def);
                } else if (definition !== "No Definition Found"){
                    setDefinition("No Definition Found.")
                }
            }).catch(function (err) {
                // There was an error
                console.warn('Something went wrong.', err);
            });
        } else {
            setDefinition("")
        }
    }

    useEffect(() => {
        getDefinition(props.word);
    });

    return (
        <div className="definitionContainer" id="style-2">
            <pre>{definition}</pre>
        </div>
    )
}