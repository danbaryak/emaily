import React from 'react';
import './Mandala.css';

const Mandala = () => {
    return (
        <div className="mandala">
            <div className="circle circle--0">
                {[...Array(4).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--1">
                {[...Array(16).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--2">
                {[...Array(16).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--3">
                {[...Array(32).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--4">
                {[...Array(32).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--5">
                {[...Array(64).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--6">
                {[...Array(64).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--7">
                {[...Array(128).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
            <div className="circle circle--8">
                {[...Array(128).keys()].map((item, index) => (
                    <div key={index} className="line">
                        <div className="line__body">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mandala;
