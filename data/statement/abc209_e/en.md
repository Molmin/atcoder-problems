Score : $500$ points

## Problem Statement

The Takahashi Dictionary lists $N$ words; the $i$-th word $(1 \leq i \leq N)$ is $s_i$.

Using this dictionary, Takahashi and Aoki will play *$3$-shiritori*, which goes as follows.

- Takahashi and Aoki alternately say words, with Takahashi going first.
- Each player must say a word beginning with the last three characters of the previous word. For example, if a player says `Takahashi`, the next player can say `ship` or `shield` along with other choices, but not `Aoki`, `sing`, or `his`.
- Uppercase and lowercase are distinguished. For example, a player cannot say `ShIp` following `Takahashi`.
- A player who becomes unable to say a word loses.
- A player cannot say a word not listed in the dictionary.
- The same word can be used multiple times.

For each $i$ $(1 \leq i \leq N)$, determine who will win when Takahashi starts the game by saying the word $s_i$. Here, we assume that both players play optimally. More specifically, each player gives first priority to avoiding his loss and second priority to defeating the opponent.

## Constraints

- $N$ is an integer between $1$ and $2 \times 10^5$ (inclusive).
- $s_i$ is a string of length between $3$ and $8$ (inclusive) consisting of lowercase and uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s_1$
> 
> $s_2$
> 
> $\vdots$
> 
> $s_N$

## Output

Print $N$ lines. The $i$-th line $(1 \leq i \leq N)$ should contain `Takahashi` if Takahashi wins when Takahashi starts the game by saying the word $s_i$, `Aoki` if Aoki wins in that scenario, and `Draw` if the game continues forever with neither of them losing in that scenario.

```input1
3
abcd
bcda
ada
```

```output1
Aoki
Takahashi
Draw
```

When Takahashi starts the game by saying `abcd`, Aoki will say `bcda` next, and Takahashi will then have no word to say, resulting in Aoki's win. Thus, we should print `Aoki`.

When Takahashi starts the game by saying `bcda`, Aoki will have no word to say, resulting in Takahashi win. Thus, we should print `Takahashi`.

When Takahashi starts the game by saying `ada`, both players will repeat `ada` and never end the game. Thus, we should print `Draw`. Note that they can use the same word any number of times.

```input2
1
ABC
```

```output2
Draw
```

```input3
5
eaaaabaa
eaaaacaa
daaaaaaa
eaaaadaa
daaaafaa
```

```output3
Takahashi
Takahashi
Takahashi
Aoki
Takahashi
```