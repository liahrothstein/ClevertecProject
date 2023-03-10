import { useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useGetBooksQuery, useGetCategoriesQuery, useGetIdBookQuery } from '../../redux';

import close from './assets/icon-close.png';
import error from './assets/icon-error.png';

import './error-message.css';

export function ErrorMessage() {
    const { id } = useParams();
    const { isError: isBooksError } = useGetBooksQuery();
    const { isError: isCategoriesError } = useGetCategoriesQuery();
    const { isError: isIdBookError } = useGetIdBookQuery(id);
    const [isClose, toggleClose] = useState(false);

    return (
        <div className={classNames('errorMessage', { closeMessage: isClose }, { error: isBooksError }, { error: isCategoriesError }, { bookError: isIdBookError })} data-test-id='error'>
            <div className="icon"><img src={error} alt="" /></div>
            <div className="errorText">Что-то пошло не так. Обновите страницу через некоторое время.</div>
            <div className="closeError">
                <button type='button' onClick={() => { toggleClose(!isClose) }}>
                    <img src={close} alt="" />
                </button>
            </div>
        </div>
    );
}