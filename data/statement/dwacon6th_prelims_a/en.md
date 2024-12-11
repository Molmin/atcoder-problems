Score : $200$ points

## Problem Statement

Niwango created a playlist of $N$ songs.
The title and the duration of the $i$-th song are $s_i$ and $t_i$ seconds, respectively.
It is guaranteed that $s_1,\ldots,s_N$ are all distinct.

Niwango was doing some work while playing this playlist. (That is, all the songs were played once, in the order they appear in the playlist, without any pause in between.)
However, he fell asleep during his work, and he woke up after all the songs were played.
According to his record, it turned out that he fell asleep at the very end of the song titled $X$.

Find the duration of time when some song was played while Niwango was asleep.

## Constraints

- $1 \leq N \leq 50$
- $s_i$ and $X$ are strings of length between $1$ and $100$ (inclusive) consisting of lowercase English letters.
- $s_1,\ldots,s_N$ are distinct.
- There exists an integer $i$ such that $s_i = X$.
- $1 \leq t_i \leq 1000$
- $t_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s_1$ $t_1$
> 
> $\vdots$
> 
> $s_{N}$ $t_N$
> 
> $X$

## Output

Print the answer.

```input1
3
dwango 2
sixth 5
prelims 25
dwango
```

```output1
30
```

- While Niwango was asleep, two songs were played: `sixth` and `prelims`.
- The answer is the total duration of these songs, $30$.

```input2
1
abcde 1000
abcde
```

```output2
0
```

- No songs were played while Niwango was asleep.
- In such a case, the total duration of songs is $0$.

```input3
15
ypnxn 279
kgjgwx 464
qquhuwq 327
rxing 549
pmuduhznoaqu 832
dagktgdarveusju 595
wunfagppcoi 200
dhavrncwfw 720
jpcmigg 658
wrczqxycivdqn 639
mcmkkbnjfeod 992
htqvkgkbhtytsz 130
twflegsjz 467
dswxxrxuzzfhkp 989
szfwtzfpnscgue 958
pmuduhznoaqu
```

```output3
6348
```