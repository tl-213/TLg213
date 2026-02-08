function draw_AvatarHealthbarManabar() {
	ctx.beginPath()
	
	ctx.drawImage(avatar_and_bar.frameBar_bg_image, 0, 0)

	ctx.fillStyle = "green"
	ctx.fillRect(211 * (player.hp_now / player.hp_max), 27, 15, 10)

	ctx.drawImage(avatar_and_bar.avatar_frameBar_image, 0, 0)
}
