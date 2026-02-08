function draw_AvatarHealthbarManabar() {
	ctx.beginPath()
	
	ctx.drawImage(avatar_and_bar.frameBar_bg_image, 0, 0)

	ctx.fillStyle = "rgb(60, 255, 20)"
	ctx.fillRect(130, 55, 211 * (player.hp.hp_now / player.hp.hp_max), 27)
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = "rgba(0, 55, 255, 1)"
	ctx.fillRect(110, 90, 182 * (player.mana.mana_now / player.mana.mana_max), 16)
	ctx.fill()

	ctx.drawImage(avatar_and_bar.avatar_frameBar_image, 0, 0)
}
