const Mutations = {
  createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = ctx.db.mutation.createItem({
      data: {
        ...args
      }
    });
  }
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   //create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutations;
