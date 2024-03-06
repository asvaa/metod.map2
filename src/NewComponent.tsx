import React from 'react';

type NewComponentType = {
    topCars: ManufacturerType[];
}

type ManufacturerType = {
    manufacturer: string;
    model: string
}




export const NewComponent = (props: NewComponentType) => {
    return (
        <table>

            {props.topCars.map((objectFromArray) => {
                return (
                    <tr key={objectFromArray.manufacturer}>
                        {objectFromArray.manufacturer}-
                        {objectFromArray.model}
                    </tr>
                )
            })}

        </table >
    );
};
