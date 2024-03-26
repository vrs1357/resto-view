"use client";
import Spinner from "../Spinner/Spinner";


export default function Loading() {
    try{
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 m-auto">
            <div className="flex flex-col">
                <div className="text-size-xl">
                    <Spinner />
                </div>
            </div>
        </main>
    );
    } catch {
        console.log("spinner reloading...");
        
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-12 m-auto">
                <div className="flex flex-col">
                    <div className="text-size-xl">
                        <Spinner />
                    </div>
                </div>
            </main>
        );
    }
  }