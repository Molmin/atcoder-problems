Score : $150$ points

## Problem Statement

There are three brothers named `A`, `B`, and `C`. The age relationships among them are given by three characters $S_{\mathrm{AB}}, S_{\mathrm{AC}}, S_{\mathrm{BC}}$, which mean the following:

- If $S_{\mathrm{AB}}$ is `&amp;lt;`, then $A$ is younger than $B$; if it is `&amp;gt;`, then $A$ is older than $B$.
- If $S_{\mathrm{AC}}$ is `&amp;lt;`, then $A$ is younger than $C$; if it is `&amp;gt;`, then $A$ is older than $C$.
- If $S_{\mathrm{BC}}$ is `&amp;lt;`, then $B$ is younger than $C$; if it is `&amp;gt;`, then $B$ is older than $C$.

Who is the middle brother, that is, the second oldest among the three?

## Constraints

- Each of $S_{\mathrm{AB}}, S_{\mathrm{AC}}, S_{\mathrm{BC}}$ is `&amp;lt;` or `&amp;gt;`.
- The input contains no contradictions; that is, there always exists an age relationship that satisfies all given inequalities.

## Input

The input is given from Standard Input in the following format:

> $S_{\mathrm{AB}}$ $S_{\mathrm{AC}}$ $S_{\mathrm{BC}}$

## Output

Print the name of the middle brother, that is, the second oldest among the three.

```input1
< < <
```

```output1
B
```

Since $A$ is younger than $B$, and $B$ is younger than $C$, we can determine that $C$ is the oldest, $B$ is the middle, and $A$ is the youngest. Hence, the answer is `B`.

```input2
< < >
```

```output2
C
```