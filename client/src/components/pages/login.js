import React from 'react';

const logIn = props => (
    <div>
        <div>
            Log in with your Google Account!
        </div>
            <div>
                <form>
                Gmail:<br />
                    <input type="text" name="Gmail" /><br />
                        Password: <br />
                            <input type="text" name="password" /><br />
                                <input type="submit" value="Submit" />
                </form>
            </div>
    </div>
)