-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "igdb_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "summary" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "first_release_date" TIMESTAMP NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "video_id" VARCHAR(255) NOT NULL,
    "game_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_igdb_id_key" ON "Game"("igdb_id");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
