# Project Name

Short description of the project.

## Assumptions

1. I've used my own splash image.
2. I've created a timer every 1 minute as of now to refresh the list.
3. I've added the functionality to add only a maximum of 3 pinned news. If I'm adding a new pinned news, it replaces the oldest pinned news.
4. I've added the functionality to delete the pinned news.
5. On swipe right, ive added both delete and pin options for that card
6. At the end of list ive just added refresh list option
7. Keeping the pinned news even when normal news is deleted since if user wants to check later
8. Added expand func for pinned news
9. Im calling again the same api when list is empty , in real scenario would have added next page num
10. Added Image prefetch func

## Project Structure

```plaintext
📦src
 ┣ 📂context
 ┃ ┗ 📜newsContext.tsx
 ┣ 📂screens
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜LeftAction.tsx
 ┃ ┃ ┃ ┣ 📜ListCard.tsx
 ┃ ┃ ┃ ┣ 📜PinnedCard.tsx
 ┃ ┃ ┃ ┣ 📜PinnedData.tsx
 ┃ ┃ ┃ ┣ 📜RightAction.tsx
 ┃ ┃ ┃ ┗ 📜SwipeableList.tsx
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜TrendingNews.tsx
 ┃ ┃ ┗ 📂Wrapper
 ┃ ┃ ┃ ┗ 📜Wrapper.tsx
 ┃ ┗ 📜LandingScreen.tsx
 ┗ 📂utils
 ┃ ┣ 📜fetchNews.ts
 ┃ ┣ 📜newsExtractor.ts
 ┃ ┗ 📜storage.ts
```
