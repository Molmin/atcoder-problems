配点 : $150$ 点

## 問題文

$A$, $B$, $C$ の三兄弟がいます。この $3$ 人の年齢関係は、$3$ つの文字 $S_{\mathrm{AB}},S_{\mathrm{AC}},S_{\mathrm{BC}}$ によって与えられ、それぞれ以下を意味します。

- $S_{\mathrm{AB}}$ が `&amp;lt;` の場合 $A$ は $B$ より年下であり、`&amp;gt;` の場合 $A$ は $B$ より年上である。
- $S_{\mathrm{AC}}$ が `&amp;lt;` の場合 $A$ は $C$ より年下であり、`&amp;gt;` の場合 $A$ は $C$ より年上である。
- $S_{\mathrm{BC}}$ が `&amp;lt;` の場合 $B$ は $C$ より年下であり、`&amp;gt;` の場合 $B$ は $C$ より年上である。

三兄弟の次男、つまり二番目に年上の人は誰ですか？

## 制約

- $S_{\mathrm{AB}},S_{\mathrm{AC}},S_{\mathrm{BC}}$ はそれぞれ `&amp;lt;` または `&amp;gt;`
- 入力に矛盾は含まれない。つまり、与えられた大小関係を全て満たす年齢関係が必ず存在する入力のみが与えられる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $S_{\mathrm{AB}}$ $S_{\mathrm{AC}}$ $S_{\mathrm{BC}}$

## 出力

三兄弟の次男、つまり二番目に年上の人の名前を出力せよ。

```input1
< < <
```

```output1
B
```

$A$ が $B$ より年下であり、$B$ が $C$ より年下であることから、$C$ が長男、$B$ が次男、$A$ が三男であることがわかります。よって答えは `B` です。

```input2
< < >
```

```output2
C
```