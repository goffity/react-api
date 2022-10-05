import React, {useRef} from "react";
import propTypes from "prop-types";

const SearchBar = ({onSubmit}) => {

    // const [text, setText] = useState("");
    // const text = useRef("")
    const textBox = useRef("")

    return (
        <div className="ui segment">
            <form className="ui form"
                  role={"search"}
                  onSubmit={(e) => {
                      e.preventDefault();
                      onSubmit(textBox.current.value);
                  }}>
                <div className="field">
                    <label>Animal search</label>
                    <input type="text"
                           autoFocus
                           ref={textBox}
                    />
                </div>
            </form>
        </div>
    )
};

SearchBar.propTypes = {
    onSubmit: propTypes.func.isRequired
}

export default SearchBar
