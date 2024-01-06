import Foods from '../../public/foods.json'
const Popular = () => {
    return (
        <div className="flex justify-center items-center mx-auto">
            <div>
                <div className="flex justify-between items-center">
                    <h1>Popular</h1>
                    <div>
                        <h3 className="text-orange-400">Add More</h3>
                    </div>
                </div>
                <div className='flex flex-wrap gap-8'>
                    {
                        Foods.map((food) => (
                            <div key={food.id}>
                                <img src={food.image} alt="" className='w-56 h-60 object-cover rounded-xl' />
                                <h5 className='text-center text-gray-500'>{food.name}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;