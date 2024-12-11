Score: $200$ points

## Problem Statement

Takahashi tried to type a string $S$ consisting of lowercase English letters using a keyboard.

He was typing while looking only at the keyboard, not the screen.

Whenever he mistakenly typed a different lowercase English letter, he immediately pressed the backspace key. However, the backspace key was broken, so the mistakenly typed letter was not deleted, and the actual string typed was $T$.

He did not mistakenly press any keys other than those for lowercase English letters.

The characters in $T$ that were not mistakenly typed are called **correctly typed characters**.

Determine the positions in $T$ of the correctly typed characters.

## Constraints

- $S$ and $T$ are strings of lowercase English letters with lengths between $1$ and $2 \times 10^5$, inclusive.
- $T$ is a string obtained by the procedure described in the problem statement.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Let $|S|$ be the length of $S$. If the correctly typed characters are the $A_1$-th, $A_2$-th, $\ldots$, $A_{|S|}$-th characters of $T$, print the values of $A_1, A_2, \ldots, A_{|S|}$ in this order, separated by spaces.

Ensure that the output is in **ascending order**. That is, $A_i &lt; A_{i + 1}$ should hold for each $1 \leq i \leq |S| - 1$.

```input1
abc
axbxyc
```

```output1
1 3 6
```

The sequence of Takahashi's typing is as follows:

- Type `a`.
- Try to type `b` but mistakenly type `x`.
- Press the backspace key, but the character is not deleted.
- Type `b`.
- Try to type `c` but mistakenly type `x`.
- Press the backspace key, but the character is not deleted.
- Try to type `c` but mistakenly type `y`.
- Press the backspace key, but the character is not deleted.
- Type `c`.

The correctly typed characters are the first, third, and sixth characters.

```input2
aaaa
bbbbaaaa
```

```output2
5 6 7 8
```

```input3
atcoder
atcoder
```

```output3
1 2 3 4 5 6 7
```

Takahashi did not mistakenly type any characters.