配点 : $800$ 点

## 問題文

`a` と `b` からなる文字列 $S$ が与えられます。$S$ に以下の操作を $0$ 回以上繰り返してできる辞書順**最大**の文字列を求めてください。

- 同一の文字である $S$ の $2$ 箇所の文字を選ぶ。それらの間の文字列を前後反転させ、選んだ $2$ 文字を削除する。すなわち、$S$ の $i$ 文字目を $s_i$ と表すことにすれば、$s_i=s_j$ なる $i &lt; j$ を選んで $S$ を $s_1\dots s_{i-1}s_{j-1}\dots s_{i+1}s_{j+1}\dots s_{|S|}$ で置き換える。

なお、この問題ではテストケースが $T$ 個与えられます。$i$ 個目のテストケースは文字列 $S_i$ で表され、$S=S_i$ に対して上記の問題を解く問題です。

## 制約

- $1 \leq T \leq 2\times 10^5$
- $1 \leq |S_i|\quad (i=1,\dots, T)$
- $1 \leq |S_1| + \dots + |S_T| \leq 2\times 10^5$
- $S_i$ は `a` と `b` からなる

## 入力

入力は以下の形式で標準入力から与えられる。

> $T$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_T$

## 出力

$T$ 行出力せよ。$i$ 行目には、$S_i$ に操作を $0$ 回以上繰り返してできる辞書順最大の文字列を出力せよ。

```input1
20
abbaa
babbb
aabbabaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbabaaaaabbaababaaabbabbbbbaaaaa
babbbaaaabaababbbabaabaaaaababaa
bbaababababbbaaabaabababaabbabab
abaabbabaabaaaaabaaaabbaabaaaaab
aabababbabbabbabbaaaabbabbbabaab
aabababbabbbbaaaabbaaaaabbaaaabb
abbbbaabaaabababaaaababababbaabb
aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbb
aaaaaaaaaabbbbbbbbbbbbbbbbbbbbbb
abababaaababaaabbbbbaaaaaaabbbbb
aabbaaaaababaabbbbbbbbbaabaaabbb
babababbababbbababbbbbababbbabbb
bbbbababbababbbabababbabbabbbbbb
aaaaaaaaaaaaaaaaababababbbabbbbb
aabababbabbabababababababbbbabbb
```

```output1
bba
bba
bbba
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbaaaaaaaa
bbbbbbbbbbbbbaaaaaaa
bbbbbbbbbbbbbbbb
bbbbbbbbbb
bbbbbbbbbbbbbbbbab
bbbbbbbbbbbbbb
bbbbbbbbbbbbbabb
abbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbaaaaaaaaa
bbbbbbbbbbbbbbbaaaaa
bbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbba
bbbbbbbbbaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbba
```

- $1$ 個目のテストケースは、$1$ 文字目と $4$ 文字目に対して操作を行うことで $S$ を `bba` にできます。
- $2$ 個目のテストケースは、$1$ 文字目と $5$ 文字目に対して操作を行うことで $S$ を `bba` にできます。
- $3$ 個目のテストケースは、$1$ 文字目と $2$ 文字目に対して操作を行うことで $S$ を `bbabaa` にでき、その後 $3$ 文字目と $5$ 文字目に対して操作を行うことで $S$ を `bbba` にできます。