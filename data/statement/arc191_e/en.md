Score : $800$ points

## Problem Statement

You are given positive integers $N$, $X$, and $Y$, and two length-$N$ sequences of non-negative integers $A = (A_1,A_2,\ldots,A_N)$ and $B = (B_1,B_2,\ldots,B_N)$.

There are $N$ bags, numbered from $1$ to $N$. Initially, bag $i$ contains $A_i$ gold coins and $B_i$ silver coins.

Consider the following game played by Takahashi and Aoki using these $N$ bags. First, Takahashi takes some of these bags (possibly zero), and Aoki takes all remaining bags. Then, starting with Takahashi, the two players alternate performing the following operation.

- Choose one bag held by the player with at least one gold coin or silver coin in it, and do one of the following two actions for that bag.-   - Remove one gold coin and add silver coins; the number of silver coins to be added is $X$ for Takahashi and $Y$ for Aoki. This action can only be done if the chosen bag has at least one gold coin.
-   - Remove one silver coin. This action can only be done if the chosen bag has at least one silver coin.
- Then, give the chosen bag to the other player.

The player who cannot perform the operation loses the game.

Find the number, modulo $998244353$, of ways Takahashi can initially take bags so that he will win under optimal play by both players.

## Constraints

- $1 \le N \le 2\times 10^5$
- $1 \le X, Y \le 10^9$
- $0 \le A_i, B_i \le 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$ $Y$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the number, modulo $998244353$, of ways Takahashi can initially take bags so that he will win under optimal play by both players.

```input1
2 1 1
1 0
1 1
```

```output1
2
```

Consider the case where Takahashi initially takes bags $1$ and $2$. One possible progression of the game is as follows:

1. Takahashi chooses bag $2$, removes $1$ gold coin, and adds $1$ silver coin. Then, he gives bag $2$ to Aoki.1.    - Takahashi holds bag $1$ with $1$ gold coin. Aoki holds bag $2$ with $2$ silver coins.
2. Aoki chooses bag $2$ and removes $1$ silver coin. Then, gives bag $2$ to Takahashi.1.    - Takahashi holds bags $1$ with $1$ gold coin and bag $2$ with $1$ silver coin. Aoki holds none.
3. Takahashi chooses bag $1$, removes $1$ gold coin, and adds $1$ silver coin. Then, he gives bag $1$ to Aoki.1.    - Takahashi holds bag $2$ with $1$ silver coin. Aoki holds bag $1$ with $1$ silver coin.
4. Aoki chooses bag $1$, removes $1$ silver coin. Then, he gives bag $1$ to Takahashi.1.    - Takahashi holds bag $1$ which is empty and bag $2$ with $1$ silver coin. Aoki holds none.
5. Takahashi chooses bag $2$ and removes $1$ silver coin. Then, he gives bag $2$ to Aoki.1.    - Takahashi holds bag $1$ which is empty. Aoki holds bag $2$ which is empty.
6. Aoki cannot perform the operation, so Aoki loses and Takahashi wins.

Takahashi can win if he initially takes only bag $2$, or if he takes both bags $1$ and $2$. Therefore, the answer is $2$.

```input2
2 2 1
1 2
1 2
```

```output2
3
```

Takahashi wins if he initially takes bag $1$, bag $2$, or both. 

```input3
5 8 3
0 0
0 0
0 0
0 0
0 0
```

```output3
0
```

No matter how Takahashi chooses the bags initially, he will lose.

```input4
7 2025 191
1323 9953
2763 3225
2624 5938
6718 2998
3741 7040
9837 1681
8817 4471
```

```output4
40
```