namespace SpriteKind {
    export const BG = SpriteKind.create()
    export const Money = SpriteKind.create()
    export const Effects = SpriteKind.create()
    export const Trail = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Groundpound = SpriteKind.create()
    export const Running = SpriteKind.create()
    export const Money2 = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Invincible = SpriteKind.create()
    export const Spike = SpriteKind.create()
    export const Dashing = SpriteKind.create()
}
function RunningAnim2 () {
    if (Speedforrunning1 == 40) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d d 4 e e e f . . . 
            . . . f e 6 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d 4 4 e e e f . . . 
            . . . f e 6 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d d 4 e e e f . . . 
            . . . f e 6 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d d 4 4 4 e f . . . 
            . . . f e 6 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e e e 4 d d 9 d f . . . 
            . . . . f f 4 4 4 4 6 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e e e 4 4 d 9 d f . . . 
            . . . . . f 4 d d 4 6 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e e e 4 d d 9 d f . . . 
            . . . . f f 4 4 4 4 6 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e 4 4 4 d d 9 d f . . . 
            . . . . 4 d d 4 4 4 6 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d d 4 e e e f . . . 
            . . . f e 6 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d 4 4 e e e f . . . 
            . . . f e 6 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d d 4 e e e f . . . 
            . . . f e 6 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 4 4 e 4 9 e f f . . 
            . . f e d d f d 4 d 6 e e f . . 
            . . . f d 9 d d 4 4 4 e f . . . 
            . . . f e 6 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        175,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e 9 4 f d d d d f 4 e e f . 
            . . f 6 e d d d d d d 9 e f . . 
            . . . f e e 4 4 4 4 e 6 f . . . 
            . . e 4 f 2 9 2 2 2 2 f 4 e . . 
            . . 4 d f 2 6 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e 9 4 f d d d d f 4 e e f . 
            . . f 6 e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e 9 f . . . 
            . . e 4 f 2 2 2 2 2 2 6 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 9 5 5 4 4 f 4 4 . . 
            . . . . . f 6 f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f 9 e d d d d d d e e f . . 
            . . . 6 e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 9 4 e . . 
            . . 4 d f 2 2 2 2 2 2 6 d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 9 . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 9 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 6 f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 9 4 4 . . 
            . . . . . f f f f f f 6 . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 9 f 4 4 5 5 4 4 f 4 4 . . 
            . . . 6 . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        75,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e e e 4 d d 9 d f . . . 
            . . . . f f 4 4 4 4 6 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e e e 4 4 d 9 d f . . . 
            . . . . . f 4 d d 4 6 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e e e 4 d d 9 d f . . . 
            . . . . f f 4 4 4 4 6 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 9 4 e 4 4 4 4 e e f . 
            . . f e e 6 d 4 d f d d e f . . 
            . . . f e 4 4 4 d d 9 d f . . . 
            . . . . 4 d d 4 4 4 6 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        175,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
sprites.onOverlap(SpriteKind.Treasure, SpriteKind.Treasure, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onCreated(SpriteKind.Trail, function (sprite) {
    timer.background(function () {
        timer.after(75, function () {
            timer.after(1, function () {
                timer.after(1, function () {
                    timer.after(1, function () {
                        timer.after(1, function () {
                            timer.after(1, function () {
                                timer.after(1, function () {
                                    sprites.destroy(sprite)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function LevelCreate () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    if (Level == "Tutorial") {
        Minutes = 0
        Seconds = 26
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (Level == "1-1") {
        Seconds = 16
        Minutes = 1
        tiles.setCurrentTilemap(tilemap`level11`)
    } else {
        tiles.setCurrentTilemap(tilemap`level16`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    Spawningthings()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) && mySprite.vy == 0 && !(GameOver)) {
        if (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile27`))) {
            mySprite.vy = -225
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`))) {
        timer.throttle("dashing", 300, function () {
            mySprite.setKind(SpriteKind.Dashing)
            Speedforrunning1 += 15
            if (LookingLeft) {
                characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . . f e d d f 1 4 d 4 e e f . 
                    . . . . f d d d 4 4 e e e f . . 
                    . . . . f e 4 4 d d 4 f . . . . 
                    . . . . f 2 2 4 d d 4 f . . . . 
                    . . . f f 5 5 f 4 4 f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f 4 4 e 4 e e f . . . . 
                    . f b b 4 d d 4 2 2 2 f . . . . 
                    . . f b 4 d d 4 4 4 4 f f . . . 
                    . . . f f 4 4 f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `],
                50,
                false
                )
                if (mySprite.kind() == SpriteKind.Dashing) {
                    for (let index = 0; index < 50; index++) {
                        mySprite.x += -0.8
                        pause(8)
                    }
                }
            } else if (!(LookingLeft)) {
                characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e 4 4 d d d f . . . . 
                    . . . . f 4 d d 4 4 e f . . . . 
                    . . . . f 4 d d 4 2 2 f . . . . 
                    . . . f f f 4 4 f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . . f e e 4 e 4 4 f b b f . 
                    . . . . f 2 2 2 4 d d 4 b b f . 
                    . . . f f 4 4 4 4 d d 4 b f . . 
                    . . . f f f f f f 4 4 f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                50,
                false
                )
                if (mySprite.kind() == SpriteKind.Dashing) {
                    for (let index = 0; index < 50; index++) {
                        mySprite.x += 0.8
                        pause(8)
                    }
                }
            }
            characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
            mySprite.setKind(SpriteKind.Player)
        })
    }
})
sprites.onOverlap(SpriteKind.Dashing, SpriteKind.Treasure, function (sprite, otherSprite) {
    TreasureCollecting()
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 . . . . . . . . . . . 
        . . . . . . . . . . . 6 6 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 9; index++) {
        Collected_Money += 1
        pause(40)
    }
})
sprites.onOverlap(SpriteKind.Groundpound, SpriteKind.Money, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 9; index++) {
        Collected_Money += 1
        pause(40)
    }
})
function Gameover () {
    MoneyHUD.setFlag(SpriteFlag.Invisible, true)
    MoneyVarHUD.setFlag(SpriteFlag.Invisible, true)
    TimeAlarm.setFlag(SpriteFlag.Invisible, true)
    TimeVar.setFlag(SpriteFlag.Invisible, true)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
    characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 4 4 4 4 4 4 f e f f . 
        . f e e 4 d f d d f d 4 e e f . 
        . . f e e f f d d f f e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . . c f 2 2 2 2 2 2 f c . . . 
        . . c 4 f 2 2 2 2 2 2 f 4 c . . 
        . . . c f 4 4 5 5 4 4 f c . . . 
        . . . . . f f f f f f . . . . . 
        `],
    150,
    false
    )
    timer.throttle("ticking timer", 1000, function () {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        timer.after(100, function () {
            music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        })
    })
    timer.throttle("blinkingBG", 2000, function () {
        AlarmBgBlinking.setFlag(SpriteFlag.Invisible, false)
        timer.after(1000, function () {
            AlarmBgBlinking.setFlag(SpriteFlag.Invisible, true)
        })
    })
    timer.after(5000, function () {
        game.reset()
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (sprite, otherSprite) {
    TreasureCollecting()
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 . . . . . . . . . . . 
        . . . . . . . . . . . 6 6 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
})
function PlayerCreate () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    mySprite.z = 1
    mySprite.ay = 500
    mySprite.setVelocity(0, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money2, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 99; index++) {
        Collected_Money += 1
        pause(5)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
    characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
    Trophy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 5 5 5 5 4 f . . . 
        . . . f 1 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 5 5 5 5 5 4 f f . . 
        . f . f 5 5 5 5 5 5 5 4 f . f . 
        . f . . f 5 5 5 5 5 4 f . . f . 
        . f . . f 5 5 5 5 5 4 f . . f . 
        . f f . . f 5 5 5 4 f . . f f . 
        . . f f f f 5 5 5 4 f f f f . . 
        . . . . . f f 5 4 f f . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . . f 4 4 f . . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Food)
    Trophy.setFlag(SpriteFlag.GhostThroughTiles, true)
    Trophy.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnTile(Trophy, location)
    for (let index = 0; index < 17; index++) {
        Trophy.y += -1
        pause(5)
    }
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f f e e f f f f f . . 
        . f f e f 1 f 4 4 f 1 f e f f . 
        . f e 4 4 d d d d d d 4 4 e f . 
        . . 4 d d 4 d d d d 4 d d 4 . . 
        . . 4 d d 4 4 4 4 4 4 d d 4 . . 
        . . . 4 4 2 2 2 2 2 2 4 4 . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f 4 4 f e e e e f 4 4 f . . 
        . f 4 d d 4 f 4 4 f 4 d d 4 f . 
        . f 4 d d 4 d d d d 4 d d 4 f . 
        . . f 4 4 d d d d d d 4 4 f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f 4 4 e e e e e e 4 4 f . . 
        . . 4 d d 4 2 2 2 2 4 d d 4 . . 
        . . 4 d d 4 f f f f 4 d d 4 . . 
        . . f 4 4 f f e e f f 4 4 f . . 
        . f f e f 1 f 4 4 f 1 f e f f . 
        . f e e 4 d d d d d d 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    false
    )
    timer.after(1250, function () {
        scene.cameraShake(2, forever2)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 4 4 4 4 4 f e f f . 
            . f e e 4 f d d d d f 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . 4 d 4 f 2 2 2 2 2 2 f 4 d 4 . 
            . 4 4 . f 4 4 5 5 4 4 f . 4 4 . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        50,
        false
        )
        timer.after(1250, function () {
            characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
            Trophy.follow(mySprite, 125)
            TouchedTrophy = true
            for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
                tiles.setTileAt(value, assets.tile`myTile3`)
            }
            for (let value2 of tiles.getTilesByType(assets.tile`myTile13`)) {
                tiles.setTileAt(value2, assets.tile`myTile14`)
                tiles.setWallAt(value2, false)
            }
            for (let value2 of tiles.getTilesByType(assets.tile`myTile27`)) {
                tiles.setTileAt(value2, assets.tile`myTile28`)
            }
            timer.after(3, function () {
                for (let value3 of tiles.getTilesByType(assets.tile`myTile8`)) {
                    tiles.setTileAt(value3, assets.tile`myTile13`)
                    tiles.setWallAt(value3, true)
                }
                for (let value3 of tiles.getTilesByType(assets.tile`myTile29`)) {
                    tiles.setTileAt(value3, assets.tile`myTile27`)
                }
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Money, SpriteKind.Money, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Running, SpriteKind.Money2, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 99; index++) {
        Collected_Money += 1
        pause(5)
    }
})
function RunningTrail () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Trail)
    mySprite2.setPosition(mySprite.x, mySprite.y)
}
sprites.onOverlap(SpriteKind.Groundpound, SpriteKind.Treasure, function (sprite, otherSprite) {
    TreasureCollecting()
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 . . . . . . . . . . . 
        . . . . . . . . . . . 6 6 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Money2, SpriteKind.Money2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.Spike, function (sprite, location) {
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    RunningTrail()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spike, function (sprite, otherSprite) {
    if (!(GotInvincibility)) {
        GotInvincibility = true
        for (let index = 0; index <= 29; index++) {
            Collected_Money += -1
            pause(3)
        }
        timer.after(2500, function () {
            GotInvincibility = false
        })
    }
})
function HUDCreate () {
    AlarmBgBlinking = sprites.create(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, SpriteKind.BG)
    AlarmBgBlinking.z = -50
    AlarmBgBlinking.setPosition(80, 60)
    AlarmBgBlinking.setFlag(SpriteFlag.Invisible, true)
    AlarmBgBlinking.setFlag(SpriteFlag.RelativeToCamera, true)
    TimeAlarm = sprites.create(img`
        . . . . f f f f f f f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 f f f 2 2 f . . . 
        . . . f f f 1 1 1 f f f . . . 
        . . f c 1 1 1 f 1 1 1 c f . . 
        . . f c 1 1 1 f 1 1 1 c f . . 
        . f c 1 1 1 1 f 1 1 1 1 c f . 
        . f c 1 1 1 1 f 1 1 1 1 c f . 
        . f c 1 1 1 1 1 1 1 1 1 c f . 
        . . f c 1 1 1 1 1 1 1 c f . . 
        . . f c 1 1 1 1 1 1 1 c f . . 
        . . . f c c 1 1 1 c c f . . . 
        . . . . f f c c c f f . . . . 
        . . . . . . f f f . . . . . . 
        `, SpriteKind.HUD)
    TimeAlarm.z = 10
    TimeAlarm.setPosition(58, 10)
    TimeAlarm.setFlag(SpriteFlag.RelativeToCamera, true)
    TimeAlarm.setFlag(SpriteFlag.Invisible, true)
    TimeVar = textsprite.create("")
    TimeVar.z = 10
    TimeVar.setPosition(70, 10)
    TimeVar.setFlag(SpriteFlag.Invisible, true)
    TimeVar.setFlag(SpriteFlag.RelativeToCamera, true)
    TimeVar.setOutline(1, 15)
    MoneyVarHUD = textsprite.create("0")
    MoneyVarHUD.setPosition(9, 101)
    MoneyVarHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    MoneyVarHUD.z = 6
    MoneyVarHUD.setOutline(1, 15)
    MoneyHUD = sprites.create(img`
        ..............ffffffffff..............
        .............ffeeeeeeeeef.............
        ............ffeeeeeeeeeef.............
        ............feeeeeeeeeff..............
        ............ffeeeeeefff...............
        .............ffeeeeff.................
        ..............ffefef..................
        ...............ff5fff.................
        ...............fff55ff................
        ...............f55ffffffffffff........
        .............fffffeffeeeeeeeefff......
        .........fffffeeeeeeeeeeeeeeeeeff.....
        ......fffeeeeeeeeeeeeeeeeeeeeeeeff....
        ....ffeeeeeeeeeeeeeeeeeeeeeeeeeeeff...
        ...ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff..
        ..ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef..
        .ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef..
        ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff.
        ..ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff..
        ...ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeff...
        ....ffeeeeeeeeeeeeeeeeeeeeeeeeefff....
        .....fffeeeeeeeeeeeeeeeeeeeeffff......
        .......fffffffeeeeeeeefffffff.........
        .............ffffffffff...............
        `, SpriteKind.HUD)
    MoneyHUD.setPosition(22, 97)
    MoneyHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    MoneyHUD.z = 5
    Collected_Trophy_VarHUD = textsprite.create("0")
    Collected_Trophy_VarHUD.setPosition(-24, 13)
    Collected_Trophy_VarHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    Collected_Trophy_VarHUD.setOutline(1, 15)
    Collected_Trophy_VarHUD.z = 6
    TrophyCounterBGHUD = sprites.create(img`
        fffffffffffffffffffffffff.......
        fffffffffffffffffffffffffffff...
        eeeeeeeeeeeeeeeeeeeeeeeeffffff..
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeff..
        eeeeeeeeefffffffffffffeeeeeeeff.
        eeeeeeeef1111111111111feeeeeefff
        eeeeeeef111111111111111feeeeeeff
        eeeeeef11111111111111111feeeeeff
        eeeeeef11111111111111111feeeeeff
        eeeeeeef111111111111111feeeeeeff
        eeeeeeeef1111111111111feeeeeeeff
        eeeeeeeeef11111111111feeeeeeeeff
        eeeeeeeeef11111111111feeeeeeeeff
        eeeeeeeeeef111111111feeeeeeeeeff
        eeeeeeeeeeef1111111feeeeeeeeeeff
        eeeeeeeeeeef1111111feeeeeeeeeeff
        eeeeeeeeeeeef11111feeeeeeeeeeeff
        eeeeeeeeeeeeef111feeeeeeeeeeeeff
        eeeeeeeeeeeeef111feeeeeeeeeeefff
        eeeeeeeeeeeeeefffeeeeeeeeeeeeff.
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeff..
        eeeeeeeeeeeeeeeeeeeeeeeeffffff..
        fffffffffffffffffffffffffffff...
        fffffffffffffffffffffffff.......
        `, SpriteKind.HUD)
    TrophyCounterBGHUD.setPosition(-16, 14)
    TrophyCounterBGHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    TrophyCounterBGHUD.z = 5
}
sprites.onOverlap(SpriteKind.Dashing, SpriteKind.Money2, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 99; index++) {
        Collected_Money += 1
        pause(5)
    }
})
sprites.onOverlap(SpriteKind.Running, SpriteKind.Money, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 9; index++) {
        Collected_Money += 1
        pause(40)
    }
})
function TreasureCollecting () {
    for (let index = 0; index <= 31; index++) {
        TrophyCounterBGHUD.x += 1
        Collected_Trophy_VarHUD.x += 1
        pause(10)
    }
    timer.after(1500, function () {
        for (let index = 0; index <= 31; index++) {
            TrophyCounterBGHUD.x += -1
            Collected_Trophy_VarHUD.x += -1
            pause(10)
        }
    })
    Collected_Treasure += 1
    for (let index = 0; index <= 249; index++) {
        Collected_Money += 1
        pause(5)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 499; index++) {
        Collected_Money += 1
        pause(1)
    }
})
function RunningAnim3 () {
    if (Speedforrunning1 == 40) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f . f . . . . f f . . . . 
            . . f . . . f . . . . f f . . . 
            . . f . . . . f f . . . f . . . 
            . f . . . . . . . f f f f . . . 
            . f . . f f f f . . . . f . . . 
            . f f f . . . f f f f f f f . . 
            . f . . . . f . . . . . f f . . 
            . . f . . . f . . . . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . f . . . . f f f f . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . . f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d 4 4 e e e f . . . 
            . . . f e 4 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f . f . . . . f f . . . . 
            . . f . . . f . . . . f f . . . 
            . . f . . . . f f . . . f . . . 
            . f . . . . . . . f f f f . . . 
            . f . . f f f f . . . . f . . . 
            . f f f . . . f f f f f f f . . 
            . f . . . . f . . . . . f f . . 
            . . f . . . f . . . . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . f . . . . f f f f . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . . f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 4 4 e f . . . 
            . . . f e 4 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f . . . . f . f . . . 
            . . . f f . . . . f . . . f . . 
            . . . f . . . f f . . . . f . . 
            . . . f f f f . . . . . . . f . 
            . . . f . . . . f f f f . . f . 
            . . f f f f f f f . . . f f f . 
            . . f f . . . . . f . . . . f . 
            . . f . . . . . . f . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . . f f f f . . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f f f . . . . f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d d d f . . . 
            . . . . . f 4 d d 4 4 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f . . . . f . f . . . 
            . . . f f . . . . f . . . f . . 
            . . . f . . . f f . . . . f . . 
            . . . f f f f . . . . . . . f . 
            . . . f . . . . f f f f . . f . 
            . . f f f f f f f . . . f f f . 
            . . f f . . . . . f . . . . f . 
            . . f . . . . . . f . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . . f f f f . . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f f f . . . . f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d d d f . . . 
            . . . . 4 d d 4 4 4 4 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f . f . . . . f f . . . . 
            . . f . . . f . . . . f f . . . 
            . . f . . . . f f . . . f . . . 
            . f . . . . . . . f f f f . . . 
            . f . . f f f f . . . . f . . . 
            . f f f . . . f f f f f f f . . 
            . f . . . . f . . . . . f f . . 
            . . f . . . f . . . . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . f . . . . f f f f . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . . f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d 4 4 e e e f . . . 
            . . . f e 4 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f . f . . . . f f . . . . 
            . . f . . . f . . . . f f . . . 
            . . f . . . . f f . . . f . . . 
            . f . . . . . . . f f f f . . . 
            . f . . f f f f . . . . f . . . 
            . f f f . . . f f f f f f f . . 
            . f . . . . f . . . . . f f . . 
            . . f . . . f . . . . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . f . . . . f f f f . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . f . . f . . . . . 
            . . . f . . . . f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 4 4 e f . . . 
            . . . f e 4 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f . . f f f . . . . 
            . . . f f f . . . . f f f . . . 
            . . f f f . . . . . . f f f . . 
            . . f f . . . . . . . . f f . . 
            . . f . . f f f f f f . . f . . 
            . . f f f f . . . . f f f f . . 
            . f f . . . f . . f . . . f f . 
            . f . . . . f . . f . . . . f . 
            . . f . . . . . . . . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . f f . . . . . . f f . . . 
            . . f . f . . . . . . f . f . . 
            . . f f f . . . . . . f f f . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f . . . . f . f . . . 
            . . . f f . . . . f . . . f . . 
            . . . f . . . f f . . . . f . . 
            . . . f f f f . . . . . . . f . 
            . . . f . . . . f f f f . . f . 
            . . f f f f f f f . . . f f f . 
            . . f f . . . . . f . . . . f . 
            . . f . . . . . . f . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . . f f f f . . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f f f . . . . f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d d d f . . . 
            . . . . . f 4 d d 4 4 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f . . . . f . f . . . 
            . . . f f . . . . f . . . f . . 
            . . . f . . . f f . . . . f . . 
            . . . f f f f . . . . . . . f . 
            . . . f . . . . f f f f . . f . 
            . . f f f f f f f . . . f f f . 
            . . f f . . . . . f . . . . f . 
            . . f . . . . . . f . . . f . . 
            . . . f . . . . . . . . f . . . 
            . . . . f f f f . . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f . . f . . . f . . . 
            . . . . . f f f . . . . f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d d d f . . . 
            . . . . 4 d d 4 4 4 4 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
function RunningAnim () {
    if (Speedforrunning1 == 40) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d 4 4 e e e f . . . 
            . . . f e 4 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 4 4 e f . . . 
            . . . f e 4 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d d d f . . . 
            . . . . . f 4 d d 4 4 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d d d f . . . 
            . . . . 4 d d 4 4 4 4 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d 4 4 e e e f . . . 
            . . . f e 4 4 d d 4 f . . . . . 
            . . . f 2 2 4 d d 4 f . . . . . 
            . . f f 5 5 f 4 4 f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 4 4 f f . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 2 2 2 4 d d 4 . . . . . 
            . . . f 5 5 4 f 4 4 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 4 4 e f . . . 
            . . . f e 4 4 4 4 d d 4 . . . . 
            . . . f 2 2 2 2 4 d d 4 . . . . 
            . . f f 5 5 4 4 f 4 4 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 4 d d d f . . . 
            . . . . . f 4 d d 4 4 e f . . . 
            . . . . . f 4 d d 4 2 2 f . . . 
            . . . . f f f 4 4 f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f 4 4 4 4 4 e f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . 4 d d 4 2 2 2 f . . . 
            . . . . . f 4 4 f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e 4 4 4 d d d d f . . . 
            . . . . 4 d d 4 4 4 4 e f . . . 
            . . . . 4 d d 4 2 2 2 2 f . . . 
            . . . . f 4 4 f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
sprites.onOverlap(SpriteKind.Dashing, SpriteKind.Money, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 9; index++) {
        Collected_Money += 1
        pause(40)
    }
})
sprites.onOverlap(SpriteKind.Groundpound, SpriteKind.Money2, function (sprite, otherSprite) {
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
    for (let index = 0; index <= 99; index++) {
        Collected_Money += 1
        pause(5)
    }
})
controller.combos.attachCombo("ubu", function () {
    mySprite.vy = -200
})
function Spawningthings () {
    for (let value4 of tiles.getTilesByType(assets.tile`myTile4`)) {
        MoneyCollectibles = [
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . . f 1 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 4 f . . . . 
            . . . . f 5 5 5 5 5 4 f . . . . 
            . . . . . f 5 5 5 4 f . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 f f 5 f . . . . . 
            . . . . f 5 f . . f 5 f . . . . 
            . . . . f 5 f . . f 5 f . . . . 
            . . . . . f 5 f f 5 f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f f . . 
            . . f f f f f f 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f f 7 7 f 7 f . . 
            . . f 7 f 7 f 1 1 f 7 f 7 f . . 
            . . f 7 f 7 f 1 1 f 7 f 7 f . . 
            . . f 7 f 7 7 f f 7 7 7 7 f . . 
            . . f 7 7 7 7 7 f f f f f f . . 
            . . f f f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . f . f 1 f . . . . . . 
            . . . . f 1 f . f f f . . . . . 
            . . . . f f . . . . . f . . . . 
            . . . f f . . . . . f 1 f . . . 
            . . f 1 f . . . . . . f f . . . 
            . . . f . . . . . . . f 1 f . . 
            . . . . f . . . . . . f f . . . 
            . . . . f f . . . . f f . . . . 
            . . . . f 1 f f . f 1 f . . . . 
            . . . . . f f 1 f . f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money)
        ]
        tiles.placeOnTile(MoneyCollectibles._pickRandom(), value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile18`)) {
        MoneyCollectibles2 = [
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . f f 1 1 f . . . 
            . . . . . f f f 5 5 5 1 f . . . 
            . . . f f 5 5 5 5 5 5 5 4 f . . 
            . . f 4 5 5 5 5 5 5 5 5 4 f . . 
            . . f 4 5 5 5 5 5 4 4 4 f f . . 
            . . f 4 5 4 4 4 4 f f f . . . . 
            . . f 4 4 f f f f . . . . . . . 
            . . f f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money2),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 9 9 9 9 f f . . . . 
            . . . f 6 6 6 6 6 6 9 9 f . . . 
            . . f 6 6 6 6 6 6 6 6 6 9 f . . 
            . . f 8 6 6 6 6 6 6 6 6 9 f . . 
            . . . f 8 6 6 6 6 6 6 6 f . . . 
            . . . . f 8 6 6 6 6 6 f . . . . 
            . . . . . f 8 6 6 8 f . . . . . 
            . . . . . . f 8 8 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money2),
        sprites.create(img`
            . . . . . . . f f f . . . . . 
            . . . . . . f 4 4 4 f . . . . 
            . . . . . f 4 4 4 f . . . . . 
            . . . . . f 4 4 4 f . . . . . 
            . . . . . f 5 5 5 f . . . . . 
            . . . . f 5 1 1 1 5 f . . . . 
            . . . f 5 1 1 f 1 1 5 f . . . 
            . . . f 5 1 1 f f 1 5 f . . . 
            . . . f 5 1 1 1 1 1 5 f . . . 
            . . . . f 5 1 1 1 5 f . . . . 
            . . . . . f 5 5 5 f . . . . . 
            . . . . . f 4 4 4 f . . . . . 
            . . . . f 4 4 4 f . . . . . . 
            . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Money2),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . f d d d d 1 1 f . . . . 
            . . . . f d d d d d 1 f . . . . 
            . . . f d d d d d d d 1 f . . . 
            . . . f b d d d d d d d f . . . 
            . . . . f b d d d d d f . . . . 
            . . . . f b b d d b b f . . . . 
            . . . . . f f b b f f . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money2)
        ]
        tiles.placeOnTile(MoneyCollectibles2._pickRandom(), value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile23`)) {
        TreasureCollectibles = [
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f 7 1 1 1 f f . . . . 
            . . . . f 6 7 7 7 1 1 f . . . . 
            . . . . f 6 7 7 7 7 1 f . . . . 
            . . . . f 6 7 7 7 7 1 f . . . . 
            . . . . f 6 7 7 7 7 7 f . . . . 
            . . . . f 6 7 7 7 7 7 f . . . . 
            . . . . f 6 7 7 7 7 7 f . . . . 
            . . . . f 6 7 7 7 7 7 f . . . . 
            . . . . f 6 6 7 7 7 7 f . . . . 
            . . . . f f 6 6 6 6 f f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Treasure),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f d d d d d d 1 1 f . . . 
            . . f d d d d d d d d d 1 f . . 
            . . f b d d d d d d d d 1 f . . 
            . . . f b d d d d d d d f . . . 
            . . . . f b d d d d d f . . . . 
            . . . . . f b d d b f . . . . . 
            . . . . . . f b b f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Treasure),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f 5 5 5 5 5 5 1 1 f . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . . f 4 5 5 5 5 5 5 5 f . . . 
            . . . f 4 4 5 5 5 5 4 4 f . . . 
            . . . . f f 4 4 4 4 f f . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Treasure),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 3 3 3 3 f f . . . . 
            . . . f 2 3 3 3 3 3 3 3 f . . . 
            . . . f 2 2 2 2 2 2 3 3 f . . . 
            . . f 2 2 2 2 2 2 2 2 3 3 f . . 
            . . f 2 2 2 2 2 2 2 2 3 3 f . . 
            . . f c c 2 2 2 2 2 2 2 2 f . . 
            . . f c c 2 2 2 2 2 2 2 2 f . . 
            . . . f c c 2 2 2 2 c c f . . . 
            . . . f c c c c c c c c f . . . 
            . . . . f f c c c c f f . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Treasure),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . f 9 6 6 6 6 9 f . . . . 
            . . . f 6 6 6 6 6 6 6 9 f . . . 
            . . . f 6 6 6 6 6 6 6 9 f . . . 
            . . . f 8 6 6 6 6 6 6 6 f . . . 
            . . . f 8 6 6 6 6 6 6 6 f . . . 
            . . . . f 8 6 6 6 6 8 f . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Treasure)
        ]
        list += 1
        tiles.placeOnTile(TreasureCollectibles[list], value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile25`)) {
        tiles.setTileAt(value4, assets.tile`transparency16`)
        SpikeEmeny = sprites.create(img`
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . f f . f a a f . f f . . . 
            . . . f c f f a a f f c f . . . 
            . . . . f f a a a a f f . . . . 
            . . . f f a f f f f a f f . . . 
            f f f a a a f . . f a a a f f f 
            f f f a a a f . . f a a a f f f 
            . . . f f a f f f f a f f . . . 
            . . . . f f a a a a f f . . . . 
            . . . f c f f a a f f c f . . . 
            . . . f f . f a a f . f f . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            `, SpriteKind.Spike)
        tiles.placeOnTile(SpikeEmeny, value4)
    }
}
sprites.onOverlap(SpriteKind.Running, SpriteKind.Treasure, function (sprite, otherSprite) {
    TreasureCollecting()
    Disappear = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effects)
    tiles.placeOnTile(Disappear, otherSprite.tilemapLocation())
    animation.runImageAnimation(
    Disappear,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 . . . . . . . . . . . 
        . . . . . . . . . . . 6 6 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . . . . 6 . . . . . 
        . . . . 6 . . . . . . 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    timer.after(350, function () {
        sprites.destroy(Disappear)
    })
    sprites.destroy(otherSprite)
})
function Variables () {
    ElectricityDown = false
    list = -1
    Collected_Money = 0
    TouchedTrophy = false
    ConveyorBeltSpeed = 70
    ConveyorBelt2Speed = 150
    Collected_Treasure = 0
    GotInvincibility = false
}
let projectile: Sprite = null
let ConveyorBelt2Speed = 0
let ConveyorBeltSpeed = 0
let ElectricityDown = false
let SpikeEmeny: Sprite = null
let list = 0
let TreasureCollectibles: Sprite[] = []
let MoneyCollectibles2: Sprite[] = []
let MoneyCollectibles: Sprite[] = []
let Collected_Treasure = 0
let TrophyCounterBGHUD: Sprite = null
let Collected_Trophy_VarHUD: TextSprite = null
let GotInvincibility = false
let mySprite2: Sprite = null
let TouchedTrophy = false
let Trophy: Sprite = null
let AlarmBgBlinking: Sprite = null
let TimeVar: TextSprite = null
let TimeAlarm: Sprite = null
let MoneyVarHUD: TextSprite = null
let MoneyHUD: Sprite = null
let Collected_Money = 0
let Disappear: Sprite = null
let LookingLeft = false
let GameOver = false
let Seconds = 0
let Minutes = 0
let mySprite: Sprite = null
let Speedforrunning1 = 0
let forever2 = 0
let Level = ""
Level = "1-1"
let Gameplay = 0
forever2 = 1000000000
Variables()
PlayerCreate()
HUDCreate()
LevelCreate()
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        if (mySprite.vy != 0) {
            characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
            mySprite.vy = 300
            RunningTrail()
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . f f . . f f . . . . . 
                . . 4 4 . f f f f f f . 4 4 . . 
                . . 4 d f 4 4 5 5 4 4 f d 4 . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . . 4 f 2 2 2 2 2 2 f 4 . . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . f e e d d d d d d e e f . . 
                . f e e 4 d d d d d d 4 e e f . 
                . f f e f 1 f 4 4 f 1 f e f f . 
                . . f f f f e e e e f f f f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f e e 2 2 2 2 2 2 e e f . . 
                . . f f f e e e e e e f f f . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . . . . f f f f . . . . . . 
                `],
            500,
            false
            )
            mySprite.setKind(SpriteKind.Groundpound)
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (mySprite.kind() == SpriteKind.Groundpound) {
            mySprite.setKind(SpriteKind.Player)
            characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile12`) || mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile24`)) {
        if (mySprite.kind() == SpriteKind.Running || mySprite.kind() == SpriteKind.Dashing) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
        }
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile12`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile24`)) {
        if (mySprite.kind() == SpriteKind.Running || mySprite.kind() == SpriteKind.Dashing) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
        }
    }
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile7`)) {
        if (mySprite.kind() == SpriteKind.Running || mySprite.kind() == SpriteKind.Dashing) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile35`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
            ElectricityDown = true
        }
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile7`)) {
        if (mySprite.kind() == SpriteKind.Running || mySprite.kind() == SpriteKind.Dashing) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile35`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
            ElectricityDown = true
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile24`)) {
        if (mySprite.kind() == SpriteKind.Groundpound) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
        }
    }
})
game.onUpdate(function () {
    Collected_Trophy_VarHUD.setText(convertToText("" + Collected_Treasure + "/" + "5"))
    MoneyVarHUD.setText(convertToText("" + Collected_Money + "$"))
    TimeVar.setText(convertToText("" + Minutes + ":" + Seconds))
    if (TouchedTrophy && !(GameOver)) {
        timer.throttle("ticking timer", 1000, function () {
            animation.runImageAnimation(
            TimeAlarm,
            [img`
                . . . . f f f f f f f . . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 f f f 2 2 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 f 1 c f . . 
                . f c 1 1 1 1 f f 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 1 1 1 1 1 c f . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 8 8 8 8 8 8 8 f . . . 
                . . . f 8 8 8 8 8 8 8 f . . . 
                . . . f 8 8 f f f 8 8 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 f f f f 1 c f . 
                . f c 1 1 1 1 1 1 1 1 1 c f . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 f f f 2 2 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 1 f 1 1 1 c f . 
                . . f c 1 1 1 1 1 f 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 f f f 2 2 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 f f f 2 2 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 f 1 1 1 1 1 c f . 
                . . f c 1 f 1 1 1 1 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 f f f 2 2 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 f f f f 1 1 1 1 c f . 
                . f c 1 1 1 1 1 1 1 1 1 c f . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 f f f 2 2 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 f 1 f 1 1 1 c f . . 
                . f c 1 1 1 f f 1 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 1 1 1 1 1 c f . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f f f . . . . 
                . . . f 8 8 8 8 8 8 8 f . . . 
                . . . f 8 8 8 8 8 8 8 f . . . 
                . . . f 8 8 f f f 8 8 f . . . 
                . . . f f f 1 1 1 f f f . . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . . f c 1 1 1 f 1 1 1 c f . . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 f 1 1 1 1 c f . 
                . f c 1 1 1 1 1 1 1 1 1 c f . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . f c 1 1 1 1 1 1 1 c f . . 
                . . . f c c 1 1 1 c c f . . . 
                . . . . f f c c c f f . . . . 
                . . . . . . f f f . . . . . . 
                `],
            125,
            false
            )
            Seconds += -1
            music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            timer.after(100, function () {
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            })
        })
        timer.throttle("blinkingBG", 2000, function () {
            AlarmBgBlinking.setFlag(SpriteFlag.Invisible, false)
            timer.after(1000, function () {
                AlarmBgBlinking.setFlag(SpriteFlag.Invisible, true)
            })
        })
        TimeVar.setFlag(SpriteFlag.Invisible, false)
        TimeAlarm.setFlag(SpriteFlag.Invisible, false)
    } else {
        TimeVar.setFlag(SpriteFlag.Invisible, true)
        TimeAlarm.setFlag(SpriteFlag.Invisible, true)
    }
    if (Seconds == -1) {
        Seconds = 59
        Minutes += -1
    }
    if (Minutes == 0 && Seconds == 0) {
        GameOver = true
        Gameover()
    }
    if (GameOver) {
        mySprite.setVelocity(0, 0)
    }
})
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        if (controller.right.isPressed()) {
            if (Speedforrunning1 <= 39) {
                Speedforrunning1 += 1
                mySprite.setKind(SpriteKind.Player)
            } else {
                mySprite.setKind(SpriteKind.Running)
                Speedforrunning1 = 40
            }
        } else if (controller.left.isPressed()) {
            if (Speedforrunning1 <= 39) {
                Speedforrunning1 += 1
                mySprite.setKind(SpriteKind.Player)
            } else {
                mySprite.setKind(SpriteKind.Running)
                Speedforrunning1 = 40
            }
        } else {
            Speedforrunning1 = 0
        }
    } else {
        Speedforrunning1 = 0
    }
})
game.onUpdate(function () {
    timer.throttle("action", 2500, function () {
        MoneyVarHUD.y += 1
        MoneyHUD.y += 1
        timer.after(375, function () {
            MoneyVarHUD.y += 1
            MoneyHUD.y += 1
            timer.after(375, function () {
                MoneyVarHUD.y += 1
                MoneyHUD.y += 1
            })
            timer.after(375, function () {
                MoneyVarHUD.y += -1
                MoneyHUD.y += -1
                timer.after(375, function () {
                    MoneyVarHUD.y += -1
                    MoneyHUD.y += -1
                    timer.after(375, function () {
                        MoneyVarHUD.y += -1
                        MoneyHUD.y += -1
                    })
                })
            })
        })
    })
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile27`)) {
        if (controller.up.isPressed()) {
            mySprite.ay = 0
            mySprite.vy = -75
        } else if (controller.down.isPressed()) {
            mySprite.ay = 0
            mySprite.vy = 75
        }
    } else {
        mySprite.ay = 500
    }
})
game.onUpdate(function () {
    if (GotInvincibility) {
        RunningAnim3()
    } else if (TouchedTrophy && !(GameOver)) {
        RunningAnim2()
    } else {
        RunningAnim()
    }
    if (controller.left.isPressed()) {
        LookingLeft = true
        if (Speedforrunning1 == 40 && controller.A.isPressed()) {
            mySprite.vx = -180
        } else {
            if (mySprite.kind() == SpriteKind.Running) {
                mySprite.setKind(SpriteKind.Player)
            }
            mySprite.vx = -75
        }
    } else if (controller.right.isPressed()) {
        LookingLeft = false
        if (Speedforrunning1 == 40 && controller.A.isPressed()) {
            mySprite.vx = 180
        } else {
            if (mySprite.kind() == SpriteKind.Running) {
                mySprite.setKind(SpriteKind.Player)
            }
            mySprite.vx = 75
        }
    } else {
        if (!(controller.B.isPressed())) {
            mySprite.vx = 0
        }
        Speedforrunning1 = 0
    }
})
game.onUpdate(function () {
    if (ElectricityDown) {
        for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
            tiles.setTileAt(value, assets.tile`myTile33`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
            tiles.setTileAt(value, assets.tile`myTile33`)
        }
    }
})
game.onUpdate(function () {
    if (Collected_Money < 0) {
        Collected_Money = 0
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        if (!(TouchedTrophy)) {
            mySprite.setVelocity(0, 0)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile27`)) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f 4 . . 
            . . . 4 f f f f f f f f d 4 . . 
            . . 4 d f 2 2 2 2 2 2 f 4 . . . 
            . . 4 4 f 4 4 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . 4 f e e e e e e e e f . . . 
            . . 4 d f f f f f f f f 4 . . . 
            . . . 4 f 2 2 2 2 2 2 f d 4 . . 
            . . . . f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f 4 . . 
            . . . 4 f f f f f f f f d 4 . . 
            . . 4 d f 2 2 2 2 2 2 f 4 . . . 
            . . 4 4 f 4 4 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . 4 f e e e e e e e e f . . . 
            . . 4 d f f f f f f f f 4 . . . 
            . . . 4 f 2 2 2 2 2 2 f d 4 . . 
            . . . . f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f 4 . . 
            . . . 4 f f f f f f f f d 4 . . 
            . . 4 d f 2 2 2 2 2 2 f 4 . . . 
            . . 4 4 f 4 4 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 1 f 4 4 f 1 f e f f . 
            . f e e 4 d d d d d d 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . . . f 2 2 2 2 2 2 f . . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 4 4 5 5 4 4 f d 4 . . 
            . . 4 4 . f f f f f f . 4 4 . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
})
game.onUpdate(function () {
    if (TouchedTrophy) {
        timer.throttle("shooting bullets", 1500, function () {
            for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
                projectile = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . f f 5 5 f f . . . . . 
                    . . . . f 4 4 4 4 5 5 f . . . . 
                    . . . f 4 4 4 4 4 4 4 5 f . . . 
                    . . . f 4 4 4 4 4 4 4 5 f . . . 
                    . . f 2 4 4 4 4 4 4 4 4 4 f . . 
                    . . f 2 4 4 4 4 4 4 4 4 4 f . . 
                    . . . f 2 4 4 4 4 4 4 4 f . . . 
                    . . . f 2 4 4 4 4 4 4 4 f . . . 
                    . . . . f 2 2 4 4 2 2 f . . . . 
                    . . . . . f f 2 2 f f . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Spike)
                tiles.placeOnRandomTile(projectile, assets.tile`myTile30`)
                projectile.vy = 75
            }
        })
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile21`)) {
        if (mySprite.kind() == SpriteKind.Running) {
            if (controller.left.isPressed()) {
                mySprite.vx = -180 - ConveyorBeltSpeed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 180 - ConveyorBeltSpeed
            } else {
                mySprite.vx = -1 * ConveyorBeltSpeed
            }
        } else if (mySprite.kind() == SpriteKind.Player) {
            if (controller.left.isPressed()) {
                mySprite.vx = -75 - ConveyorBeltSpeed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 75 - ConveyorBeltSpeed
            } else {
                mySprite.vx = -1 * ConveyorBeltSpeed
            }
        }
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile20`)) {
        if (mySprite.kind() == SpriteKind.Running) {
            if (controller.left.isPressed()) {
                mySprite.vx = -180 + ConveyorBeltSpeed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 180 + ConveyorBeltSpeed
            } else {
                mySprite.vx = ConveyorBeltSpeed
            }
        } else if (mySprite.kind() == SpriteKind.Player) {
            if (controller.left.isPressed()) {
                mySprite.vx = -75 + ConveyorBeltSpeed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 75 + ConveyorBeltSpeed
            } else {
                mySprite.vx = ConveyorBeltSpeed
            }
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile31`)) {
        if (mySprite.kind() == SpriteKind.Running) {
            if (controller.left.isPressed()) {
                mySprite.vx = -180 - ConveyorBelt2Speed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 180 - ConveyorBelt2Speed
            } else {
                mySprite.vx = -1 * ConveyorBelt2Speed
            }
        } else if (mySprite.kind() == SpriteKind.Player) {
            if (controller.left.isPressed()) {
                mySprite.vx = -75 - ConveyorBelt2Speed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 75 - ConveyorBelt2Speed
            } else {
                mySprite.vx = -1 * ConveyorBelt2Speed
            }
        }
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile32`)) {
        if (mySprite.kind() == SpriteKind.Running) {
            if (controller.left.isPressed()) {
                mySprite.vx = -180 + ConveyorBelt2Speed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 180 + ConveyorBelt2Speed
            } else {
                mySprite.vx = ConveyorBelt2Speed
            }
        } else if (mySprite.kind() == SpriteKind.Player) {
            if (controller.left.isPressed()) {
                mySprite.vx = -75 + ConveyorBelt2Speed
            } else if (controller.right.isPressed()) {
                mySprite.vx = 75 + ConveyorBelt2Speed
            } else {
                mySprite.vx = ConveyorBelt2Speed
            }
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
        mySprite.setVelocity(0, 0)
        if (TouchedTrophy) {
            TouchedTrophy = false
            MoneyVarHUD.setFlag(SpriteFlag.Invisible, true)
            MoneyHUD.setFlag(SpriteFlag.Invisible, true)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
            timer.after(1100, function () {
                game.setGameOverMessage(true, "You've collected " + convertToText(Collected_Money) + "$!")
                game.gameOver(true)
            })
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile22`)) {
        for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
            tiles.setWallAt(value, true)
        }
    } else {
        for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
            tiles.setWallAt(value, false)
        }
    }
})
