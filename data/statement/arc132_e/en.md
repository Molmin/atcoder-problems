Score : $800$ points

## Problem Statement

There are $n$ squares arranged in a row. Each square has a left- or right-pointing footprint or a hole.
The initial state of each square is described by a string $s$ consisting of `.`, `&amp;lt;`, `&amp;gt;`. If the $i$-th character of $s$ is `.`, the $i$-th square from the left has a hole; if that character is `&amp;lt;`, that square has a left-pointing footprint; if that character is `&amp;gt;`, that square has a right-pointing footprint.

Snuke, the cat, will repeat the following procedure until there is no more square with a hole.

- Step $1$: Choose one square with a hole randomly with equal probability.
- Step $2$: Fill the hole in the chosen square, stand there, and face to the left or right randomly with equal probability.
- Step $3$: Keep walking in the direction Snuke is facing until he steps on a square with a hole or exits the row of squares.

Here, the choices of squares and directions are independent of each other.

When Snuke walks on a square (without a hole), that square gets a footprint in the direction he walks in.
If the square already has a footprint, it gets erased and replaced by a new one.
For example, in the situation `&amp;gt;.&amp;lt;&amp;gt;&amp;lt;.&amp;gt;&amp;lt;`, if Snuke chooses the $6$-th square from the left and faces to the left, the $6$-th, $5$-th, $4$-th, $3$-rd squares get left-pointing footprints: `&amp;gt;.&amp;lt;&amp;lt;&amp;lt;&amp;lt;&amp;gt;&amp;lt;`.

Find the expected value of the number of left-pointing footprints when Snuke finishes the procedures, modulo $998244353$.

## Notes

When the sought expected value is represented as an irreducible fraction $p/q$, there uniquely exists an integer $r$ such that $rq\equiv p \sim (\text{mod } 998244353)$ and $0 \leq r \lt 998244353$ under the Constraints of this problem.
This $r$ is the value to be found.

## Constraints

- $1 \leq n \leq 10^5$
- $s$ is a string of length $n$ consisting of `.`, `&amp;lt;`, `&amp;gt;`.
- $s$ contains at least one `.`.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $s$

## Output

Print the expected value of the number of left-pointing footprints, modulo $998244353$.

```input1
5
><.<<
```

```output1
3
```

In Step $1$, Snuke always chooses the only square with a hole.

If Snuke faces to the left in Step $2$, the squares become `&amp;lt;&amp;lt;&amp;lt;&amp;lt;&amp;lt;`, where $5$ squares have left-pointing footprints.

If Snuke faces to the right in Step $2$, the squares become `&amp;gt;&amp;lt;&amp;gt;&amp;gt;&amp;gt;`, where $1$ square has a left-pointing footprint.

Therefore, the answer is $\frac{5+1}{2}=3$.

```input2
20
>.>.<>.<<.<>.<..<>><
```

```output2
848117770
```