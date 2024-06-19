import flet as ft
import asyncio

async def main(page: ft.Page) -> None:
    page.title = "Посхалко"
    page.theme_mode = ft.ThemeMode.DARK
    page.bgcolor = "#141221"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    """async def text_count() -> None:
        score_counter.opacity = 5000
        score_counter.size = 50
        if progress_bar.value >= 0:
            score_counter.value = "+1"
        else:
            score_counter.value = "Энергия закончилась!"
        score_counter.right = 0
        score_counter.left = tap_position[0]
        score_counter.top = tap_position[1]
        score_counter.bottom = 0

        await page.update_async()

        await asyncio.sleep(0.2)
        score_counter.opacity = 0

        await page.update_async()"""

    async def score_up(event = ft.ContainerTapEvent) -> None:
        if progress_bar.value >= 0:
            score.data += 1
            score.value = str(score.data)

            image.scale = 0.95

            score_counter.opacity = 50
            score_counter.size = 50
            score_counter.value = "+1"
            score_counter.right = 0
            score_counter.left = tap_position[0]
            score_counter.top = tap_position[1]
            score_counter.bottom = 0

            progress_bar.value -= (1/50)

            await page.update_async()

            await asyncio.sleep(0.2)
            image.scale = 1
            score_counter.opacity = 0

            await page.update_async()
        else:

            score_counter.opacity = 50
            score_counter.size = 25
            score_counter.value = "Энергия закончилась!"
            score_counter.right = 0
            score_counter.left = tap_position[0]
            score_counter.top = tap_position[1]
            score_counter.bottom = 0

            await page.update_async()

            await asyncio.sleep(0.2)
            score_counter.opacity = 0

            await page.update_async()


    error = ft.Text(value = "Энергия закончилась!", size=75, color="#bbbbbbcf")

    def on_tap_down(event: ft.ContainerTapEvent):
        global tap_position
        tap_position = (event.local_x, event.local_y)

    score = ft.Text(value = "0", size=100, data=0)
    score_counter = ft.Text(
        size = 50,
        animate_opacity=ft.Animation(duration=200, curve=ft.AnimationCurve.BOUNCE_IN)
    )
    image = ft.Image(
        src="Eschkere.png",
        fit=ft.ImageFit.CONTAIN,
        animate_scale=ft.Animation(duration=600, curve=ft.AnimationCurve.EASE)
    )
    progress_bar = ft.ProgressBar(
        value=1,
        width=page.width - 100,
        bar_height=20,
        color="#EEAB06",
        bgcolor="#C78F04"
    )

    await page.add_async(
        score,
        ft.Container(
            content=ft.Stack(controls=[image, score_counter]),
            on_click=score_up,
            on_tap_down=on_tap_down,
            margin=ft.Margin(0, 0, 0, 30)
        ),
        ft.Container(
            content=progress_bar,
            border_radius=ft.BorderRadius(10, 10, 10, 10)
        )
    )
    
if __name__ == "__main__":
    tap_position = (0, 0)
    ft.app(target = main, view=ft.WEB_BROWSER, port=8000)