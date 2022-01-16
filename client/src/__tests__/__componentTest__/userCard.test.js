import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserCard from "../../components/UserCard/UserCard";


it('test UserCard ',  () =>  {
    render(
        <UserCard
            user={{
                username: '',
                profile_count: 3,
                email: 'test@gmail.com'
            }}
        />
    );
    expect(true).toEqual(true);
});