'use client';

import { useState } from 'react';
import Bus from './Bus'

export default function BusLayout() {
    return (
        <div className="flex-col gap-2 md:mr-18 w-full md:w-1/2"
            style={{
                height: '75vh',
                color: 'white',
                display: 'flex',
                background: 'gray',
                fontWeight: 'bold',
                fontSize: '1.25rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
            <div className="justify-center flex gap-2 w-full">
                <div className=""
                    style={{
                    width: '50%',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'black',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '1px solid red' 
                }}>
                    Building 1
                </div>
                <div className = "flex flex-col w-1/20 gap-2">
                    <Bus>1</Bus>
                    <Bus>2</Bus>
                </div>
            </div>
            <div className = "justify-center flex gap-2 w-full h-[7.5%]">
                <div className = "w-[9%]">

                </div>
                <div className=""
                    style={{
                    width: '40%',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'black',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '1px solid red' 
                }}>
                    Building 2
                </div>
                <div className = "flex flex-col w-1/20 gap-2">
                    <Bus>3</Bus>
                </div>
            </div>
            <div className = "justify-center flex gap-2 w-full h-[45%]">
                <div className=""
                    style={{
                    width: '10%',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'black',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '1px solid red' 
                }}>
                    <p className="text-center rotate-270">Building 3</p>
                </div>
                <div className = "flex flex-col w-1/20 gap-2 mb-8 mt-8" >
                    <Bus>10</Bus>
                    <Bus>11</Bus>
                </div>
                <div className = "flex flex-col w-1/20 gap-2 mb-8 mt-8" >
                    <Bus>8</Bus>
                    <Bus>9</Bus>
                </div>
                <div className = "flex flex-col w-1/2 gap-2" >
                    <div className = "justify-center flex gap-2 w-full h-[10%]">
                        <Bus>7</Bus>
                        <Bus>6</Bus>
                        <Bus>5</Bus>
                        <Bus>4</Bus>
                    </div>
                    <div className = "justify-center flex gap-2 w-full h-[80%]">
                        <div className=""
                            style={{
                            width: '100%',
                            height: '100%',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            background: 'black',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            border: '1px solid red' 
                        }}>
                            Parking
                        </div>
                    </div>
                    <div className = "justify-center flex gap-2 w-full h-[10%]">
                        <Bus>12</Bus>
                        <Bus>13</Bus>
                        <Bus>14</Bus>
                        <Bus>15</Bus>
                    </div>
                </div>
                <div className = "w-[16%]">

                </div>
            </div>
            <div className = "justify-center flex gap-2 w-full h-[4.5%]" >
                <div className = "w-[23%]">

                </div>
                <div className = "flex w-full gap-2">
                    <Bus>16</Bus>
                    <Bus>17</Bus>
                    <Bus>18</Bus>
                    <Bus>19</Bus>
                    <Bus>20</Bus>
                </div>
                <div className = "w-[34%]">

                </div>
            </div>
            <div className = "justify-center flex gap-2 w-full h-[4.5%]" >
                <div className = "w-[23%]">

                </div>
                <div className = "flex w-full gap-2">
                    <Bus>21</Bus>
                    <Bus>22</Bus>
                    <Bus>23</Bus>
                    <Bus>24</Bus>
                    <Bus>25</Bus>
                </div>
                <div className = "w-[34%]">

                </div>
            </div>
            <div className = "justify-center flex w-full h-[10%]">
                <div className = "w-[76%]">

                </div>
                <div className=""
                    style={{
                    width: '70%',
                    height: '100%',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'black',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '1px solid red' 
                }}>
                    Building 4
                </div>
                <div className = "w-[41%]">

                </div>
            </div>
        </div>
    );
}
