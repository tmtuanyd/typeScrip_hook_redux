import React, {ReactNode} from 'react';
export interface HeadingProps {title: string}

export const Heading = ({title}: HeadingProps) =>{
    return <h1>{title}</h1>
}

const EvenMoreReactComponent = () => {
    return (
        <Heading title={'Hello abc'}/>
    );
};

export default EvenMoreReactComponent;