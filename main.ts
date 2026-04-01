player.onItemInteracted(DIAMOND_SWORD, function () {
    mobs.kill(
    mobs.target(NEAREST_PLAYER)
    )
    mobs.spawn(mobs.monster(IRON_GOLEM), pos(0, 0, 0))
})
mobs.onMobKilled(mobs.monster(ENDER_DRAGON), function () {
    gameplay.timeAdd(100)
})
blocks.onBlockBroken(GRASS, function () {
    blocks.place(BED, pos(0, 0, 0))
})
player.onChat("run", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
mobs.kill(
mobs.target(NEAREST_PLAYER)
)
