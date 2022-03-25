<template>
  <nav>
    <ul class="flex space-x-6">
      <li>
        <NavLink href="/" :active="$page.component === 'AutoPark'">
          AutoPark
        </NavLink>
      </li>

      <li>
        <NavLink href="/commandes" :active="$page.component === 'Commandes'">
          Commandes
        </NavLink>
      </li>

      <li>
        <NavLink href="/historique" :active="$page.component === 'Historique'">
          Historique
        </NavLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from "../../Shared/NavLink";

export default {
  components: { NavLink },
};
</script>
