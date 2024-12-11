Score : $700$ points

## Problem Statement

There are $2N$ integers written on a blackboard. The $i$-th integer is $A_i$.

Alice and Bob will play a game consisting of $N$ rounds.
In each round, they do the following:

- First, Alice chooses an integer on the blackboard and erases it. Let $x$ be the integer erased here.
- Second, Bob chooses an integer on the blackboard and erases it. Let $y$ be the integer erased here.
- Finally, write the value $x \oplus y$ on a notebook, where $\oplus$ denotes the bitwise XOR.

In the end, all the integers on the blackboard will be erased, and the notebook will have $N$ integers written on it.
The greatest integer written on the notebook will be the score of the game.
Alice wants to maximize this score, while Bob wants to minimize it.
Find the score of the game when both players play optimally under their objectives.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i &lt; 2^{30}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_{2N}$

## Output

Print the answer.

```input1
2
0 1 3 5
```

```output1
4
```

Below is one possible progress of the game (it may contain suboptimal choices).

- <p>Round $1$:</p>
-   - Alice chooses $A_1=0$.
-   - Bob chooses $A_3=3$.
-   - They write $0 \oplus 3=3$ on the notebook.
- <p>Round $2$:</p>
-   - Alice chooses $A_4=5$.
-   - Bob chooses $A_2=1$.
-   - They write $5 \oplus 1=4$ on the notebook.
- <p>The score of the game is $\max(3,4)=4$.</p>

```input2
2
0 0 0 0
```

```output2
0
```

```input3
10
974654030 99760550 750234695 255777344 907989127 917878091 818948631 690392797 579845317 549202360 511962375 203530861 491981716 64663831 561104719 541423175 301832976 252317904 471905694 350223945
```

```output3
268507123
```