function draw_AvatarHealthbarManabar() {
	ctx.beginPath()
	
	ctx.drawImage(avatar_and_bar.frameBar_bg_image, 0, 0)

	ctx.fillStyle = "green"
	ctx.fillRect(130, 55, 211 * (player.hp.hp_now / player.hp.hp_max), 27)

	ctx.drawImage(avatar_and_bar.avatar_frameBar_image, 0, 0)
}
