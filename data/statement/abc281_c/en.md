Score : $300$ points

## Problem Statement

We have a playlist with $N$ songs numbered $1, \dots, N$.<br>
Song $i$ lasts $A_i$ seconds.

When the playlist is played, song $1$, song $2$, $\ldots$, and song $N$ play in this order. When song $N$ ends, the playlist repeats itself, starting from song $1$ again. While a song is playing, the next song does not play; when a song ends, the next song starts immediately.

At exactly $T$ seconds after the playlist starts playing, which song is playing? Also, how many seconds have passed since the start of that song?<br>
There is no input where the playlist changes songs at exactly $T$ seconds after it starts playing.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq T \leq 10^{18}$
- $1 \leq A_i \leq 10^9$
- The playlist does not change songs at exactly $T$ seconds after it starts playing.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $T$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print an integer representing the song that is playing at exactly $T$ seconds after the playlist starts playing, and an integer representing the number of seconds that have passed since the start of that song, separated by a space.

```input1
3 600
180 240 120
```

```output1
1 60
```

When the playlist is played, the following happens. (Assume that it starts playing at time $0$.)

- From time $0$ to time $180$, song $1$ plays.
- From time $180$ to time $420$, song $2$ plays.
- From time $420$ to time $540$, song $3$ plays.
- From time $540$ to time $720$, song $1$ plays.
- From time $720$ to time $960$, song $2$ plays.
- $\qquad\vdots$

At time $600$, song $1$ is playing, and $60$ seconds have passed since the start of that song.

```input2
3 281
94 94 94
```

```output2
3 93
```

```input3
10 5678912340
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output3
6 678912340
```