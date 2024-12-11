Score : $1300$ points

## Problem Statement

There are $N$ people numbered $1$ through $N$, and $K$ items numbered $1$ through $K$.
They play a turn-based game.
Person $1$ takes the first turn, Person $2$ takes the next turn, then Person $3$, $\ldots$, Person $N$, then Person $1$ again,
$\ldots$, Person $N$, Person $1$ again, $\ldots$, and so on, until all items are taken.

In each turn, the following happens:

- If the person already wins an item, nothing happens.
- Otherwise, he chooses one of the items he hasn't chosen yet uniformly at random, and secretly tells it to Snuke, the judge of the game.
If the item is already taken by someone else, nothing happens; otherwise he wins the item.

For each $i$, compute the probability that Person $i$ wins an item, modulo $998,244,353$ (as described in the Notes section).

## Notes

- All random choices are made independently.
- We can prove that the game always ends in finite number of steps.
- We can also prove that, whenever a player is asked to choose an item, he has at least one item he hasn't chosen yet.
- We can also prove that the probabilities are rational numbers. When you print a probability, first write it as a fraction $\frac{y}{x}$, where $x, y$ are integers and $x$ is not divisible by $P = 998,244,353$
(under the constraints of the problem, such representation is always possible).
Then, you need to print the only integer $z$ between $0$ and $P - 1$, inclusive, that satisfies $xz \equiv y \pmod{P}$.

## Constraints

- $1 \leq K \leq N \leq 40$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print $N$ lines.
On the $i$-th line, print the probability that the $i$-th person wins an item, modulo $998,244,353$.

```input1
3 2
```

```output1
1
249561089
748683265
```

- First, Person $1$ chooses an item (call it Item $p$), and wins it.-   - Then, with $1/2$ probability, Person $2$ chooses the other item in the next turn and wins it, and the game ends.
-   - With $1/2$ probability, Person $2$ chooses $p$, he doesn't win it, and Person $3$ takes the next turn.-   -   - With $1/4$ probability, Person $3$ chooses the other item, wins it, and the game ends.
-   -   - With $1/4$ probability, Person $3$ chooses $p$ again. Then, next turn is Person $1$'s and nothing happens because he has already won an item. Then, in the next turn, Person $2$ chooses the other item for sure because he has already chosen $p$ in his previous turn, so he wins an item this time, and the game ends.

To summarize, Person $1, 2, 3$ will get an item with probability $1, \frac{3}{4}, \frac{1}{4}$, respectively.

```input2
4 3
```

```output2
1
314262112
767169272
915057324
```

The probabilities are $1, \frac{47}{54}, \frac{77}{108}, \frac{5}{12}$.

```input3
40 10
```

```output3
1
868517173
27621563
837064957
222682471
512462123
662169358
927654899
421237429
47896491
462367772
888812171
300869511
63754652
144548024
358216674
895724239
274552277
722622637
946769993
579325471
777654313
142897955
607284898
8038340
863909530
63295741
862961672
335905745
944425523
358698956
299986928
847582651
197657467
180361665
412489246
762713624
410322243
646538576
79047758
```